"use client";
import React, { useEffect } from "react";
import { GetPrivatePolls } from "../../services/Poll";
import PollCard from "../shared/PollCard";

const PrivatePollList = () => {
  const [user, setUser] = React.useState<string | null>(null);
  const [polls, setPolls] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUser(userId);
    } else {
      setUser(null);
    }
  }, []);

  const fetchPrivatePolls = async () => {
    try {
      const res = await GetPrivatePolls(user as string);
      if (res?.success) {
        setPolls(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPrivatePolls();
  }, [user]);

  return (
    <>
      <div className="px-16 grid grid-cols-1 py-10">
        {polls.map((pollData: any, index: number) => (
          <div key={index} className="mb-4">
            <PollCard poll={pollData} shared={true}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default PrivatePollList;
