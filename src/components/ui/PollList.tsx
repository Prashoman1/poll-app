import React from "react";
import PollCard from "../shared/PollCard";

const PollList = ({data}:any) => {
    
  return (
    <>
      <div className="px-16 grid grid-cols-1 py-10">
        {
          data.map((pollData:any, index:number)=>(
            <div key={index} className="mb-4">
              <PollCard  poll={pollData} shared={false}/>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default PollList;
