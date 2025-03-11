import React from "react";
import PollCard from "../shared/PollCard";

const PollList = () => {
    const pollData = {
            reactions: { fire: 10, like: 25 },
            totalVotes: 35,
            _id: "67cf15672961684b4b11fc83",
            question: "What is your favorite programming language?",
            options: [
              { text: "JavaScript", votes: 10, _id: "67cf15672961684b4b11fc84" },
              { text: "Python", votes: 8, _id: "67cf15672961684b4b11fc85" },
              { text: "Java", votes: 12, _id: "67cf15672961684b4b11fc86" },
              { text: "C#", votes: 5, _id: "67cf15672961684b4b11fc87" },
            ],
            expiresAt: "2025-03-11T10:33:46.000Z",
            hideResults: false,
            comments: [{ text: "I love Python!" }, { text: "JS is the best!" }],
            createdAt: "2025-03-10T16:37:59.909Z",
            updatedAt: "2025-03-10T16:37:59.909Z",
            slug: "what-is-your-favorite-programming-language",
          };
  return (
    <>
      <div className="px-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
       <PollCard poll={pollData}/>
      </div>
    </>
  );
};

export default PollList;
