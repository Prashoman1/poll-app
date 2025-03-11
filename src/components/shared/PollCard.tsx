"use client";

import React, { useState } from "react";
import { FaFire, FaThumbsUp, FaComment } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const PollCard = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleVote = (slug:string) => {
    console.log(selectedOption, slug);
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full max-w-3xl mx-auto">
      {/* Poll Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {poll.question}
      </h3>

      {/* Expiration Time */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        Expires at:{" "}
        <span className="font-medium">
          {new Date(poll.expiresAt).toLocaleString()}
        </span>
      </p>
      <div className="mt-3 space-y-2">
        {poll.options.map((option) => (
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

      {/* Poll Options */}
      {/* <div className="mt-3 space-y-2">
        {poll.options.map((option) => (
          <button
            key={option._id}
            onClick={() => handleVote(option._id)}
            className="w-full text-left px-4 py-2 border rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {option.text} - {votes[option._id]} votes
          </button>
        ))}
      </div> */}

      {/* Reaction Buttons */}
      <div className="flex items-center justify-between mt-4 text-gray-600 dark:text-gray-300">
        <div className="flex items-center space-x-7">
          <button className="flex items-center space-x-1 hover:text-red-500 transition">
            <FaFire className="text-lg" />
            <span>{poll.reactions.fire}</span>
          </button>

          <button className="flex items-center space-x-1 hover:text-blue-500 transition">
            <FaThumbsUp className="text-lg" />
            <span>{poll.reactions.like}</span>
          </button>

          <button className="flex items-center space-x-1 hover:text-gray-500 transition">
          <FaComment className="text-lg" />
          <span>{poll.comments.length}</span>
        </button>
        </div>
        <button
        onClick={() => handleVote(poll?.slug)}
         className="flex items-center space-x-1 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
          <span>Vote</span> <FaArrowRight className="text-xs" />
        </button>
        
      </div>
    </div>
  );
};

export default PollCard;
