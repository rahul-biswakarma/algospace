import React from "react";
import { useSelector } from "react-redux";

const TargetData = () => {
  let target = useSelector((state) => state.searching.target);
  return (
    <div className="flex flex-col h-full font-space p-gap uppercase justify-between  border-b-[10px] border-b-green-bg border-r-[1px] border-r-border-1 ">
      <div className="flex flex-col ">
        <div className="text-purple">Target </div>
        <div className="text-text-1 text-[4.4rem]">
          <span>{target}</span>
        </div>
      </div>
    </div>
  );
};

export default TargetData;
