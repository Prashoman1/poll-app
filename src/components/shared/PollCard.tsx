"use client";
import { button, useDisclosure } from "@nextui-org/react";

import React, { useState } from "react";
import { FaFire, FaThumbsUp, FaComment } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { CompareDateTime, FormatDateTime } from "../../helpers/index";
import {
  InsertAnswerPollApi,
  InsertReactionPollApi,
} from "../../services/Poll";
import { toast } from "react-toastify";
import LoadingApi from "./LoadingApi";
import CommentModal from "./Modal";
import { CiShare2 } from "react-icons/ci";

const PollCard = ({ poll, shared = false }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [likeTotal, setLikeTotal] = useState(poll.reactions?.like);
  const [fireTotal, setFireTotal] = useState(poll.reactions?.fire);

  const { formattedDate, formattedTime } = FormatDateTime(poll?.expiresAt);

  const handleVote = async (slug: string) => {
    setLoading(true);
    try {
      const data = {
        optionText: selectedOption,
      };
      const res = await InsertAnswerPollApi(data, slug);
      if (res?.success) {
        toast.success(res?.message);
        setSelectedOption("");
      } else {
        toast.error(res?.response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleReaction = async (slug: string, reaction: string) => {
    try {
      if (reaction === "like") {
        setLikeTotal(likeTotal + 1);
      } else {
        setFireTotal(fireTotal + 1);
      }
      const data = {
        reaction,
      };
      const res = await InsertReactionPollApi(data, slug);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopyLink = (slug: string) => {
    const pollLink = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/polls/${slug}`;

    navigator.clipboard
      .writeText(pollLink)
      .then(() => toast.success("Link copied to clipboard"))
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full max-w-3xl mx-auto relative">
        {/* Poll Title */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {poll?.question}
            </h3>

            {/* Expiration Time */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Expires at:{" "}
              <span className="font-medium">
                {formattedDate}-{formattedTime}
              </span>
            </p>
          </div>
          {shared && (
            <button
              onClick={() => handleCopyLink(poll?.slug)}
              className="flex items-center space-x-1 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <span>Share</span> <CiShare2 className="text-xs" />
            </button>
          )}
        </div>

        {CompareDateTime(poll?.expiresAt) ? (
          <>
            {" "}
            <div className="mt-3 space-y-2">
              {poll.options.map((option: any) => (
                <button
                  key={option._id}
                  onClick={() => handleVote(option._id)}
                  className="w-full text-left px-4 py-2 border rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  {option.text} - {option?.votes} votes
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mt-3 space-y-2">
              {poll.options.map((option: any) => (
                <label
                  key={option._id}
                  className="flex items-center space-x-2 p-2 border rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition cursor-pointer"
                >
                  <input
                    type="radio"
                    name="poll"
                    value={option._id}
                    onChange={() => setSelectedOption(option.text)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span>{option.text}</span>
                </label>
              ))}
            </div>
          </>
        )}

        {/* Poll Options */}

        {/* Reaction Buttons */}
        <div className="flex items-center justify-between mt-4 text-gray-600 dark:text-gray-300">
          <div className="flex items-center space-x-7">
            <button
              onClick={() => handleReaction(poll?.slug, "fire")}
              className="flex items-center space-x-1 hover:text-red-500 transition"
            >
              <FaFire className="text-lg" />
              <span>{fireTotal}</span>
            </button>

            <button
              onClick={() => handleReaction(poll?.slug, "like")}
              className="flex items-center space-x-1 hover:text-blue-500 transition"
            >
              <FaThumbsUp className="text-lg" />
              <span>{likeTotal}</span>
            </button>

            <button className="flex items-center space-x-1 hover:text-gray-500 transition">
              <FaComment onClick={onOpen} className="text-lg" />
              <span>{poll.comments.length}</span>
            </button>
          </div>
          {CompareDateTime(poll?.expiresAt) ? (
            <button className="flex items-center space-x-1 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <span>See Results</span> <FaArrowRight className="text-xs" />
            </button>
          ) : (
            <button
              onClick={() => handleVote(poll?.slug)}
              className="flex items-center space-x-1 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <span>Vote</span> <FaArrowRight className="text-xs" />
            </button>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button className="flex items-center space-x-1 hover:text-gray-500 transition">
            Total Votes - <span className="ms-1">{poll.totalVotes}</span>
          </button>
        </div>
        {loading && <LoadingApi />}
      </div>
      <CommentModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        commentsData={poll?.comments}
        slug={poll?.slug}
      />
    </>
  );
};

export default PollCard;
