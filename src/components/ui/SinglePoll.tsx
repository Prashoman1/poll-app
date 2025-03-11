"use client";
import React, { use, useEffect } from "react";
import { useParams } from "next/navigation";
import { GetSinglePoll } from "../../services/Poll";
import PollCard from "../shared/PollCard";

const SinglePoll = () => {
  const { slug } = useParams();
  const [poll, setPoll] = React.useState<any>(null);

  const fetchPoll = async () => {
    try {
      const res = await GetSinglePoll(slug as string);

      if (res?.success) {
        setPoll(res.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPoll();
  }, [slug]);

  return (
    <div>
      {
        poll && <PollCard poll={poll} shared={false} />
      }
    </div>
  );
};

export default SinglePoll;
