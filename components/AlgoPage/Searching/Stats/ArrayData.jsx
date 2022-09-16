import React from "react";
import { useSelector } from "react-redux";

const ArrayData = () => {
  let searchingStatus = useSelector(
    (state) => state.searching.status
  ).toLowerCase();
  return (
    <div className="flex flex-col font-space p-gap border-r-[1px] border-r-border-1 justify-between  border-b-[10px] border-b-cyan-bg">
      <div className="flex justify-between gap-[2rem] text-[15px]">
        <div
          className="flex gap-[0.2rem] text-text-1 flex-wrap text-[1.3rem]"
          id="searching-array-data"
        >
          {useSelector((state) => state.searching.array).map(
            (element, index) => {
              return (
                <span
                  key={index}
                  className="noselect array-data"
                  id={`searchingStatsArray${index}`}
                >
                  {element}
                </span>
              );
            }
          )}
        </div>
        <div className="text-green uppercase flex gap-gap">
          Total{" "}
          <span className="text-cyan" id="array-element-count">
            {useSelector((state) => state.searching.arrayCount)}
          </span>
        </div>
      </div>
      <div className="flex justify-between pt-[3rem] text-[15px]">
        <div>
          <span className="text-green uppercase">Array</span>
        </div>
        <div className="flex gap-[1rem]">
          <div className="flex gap-[1rem]">
            <span className="text-green uppercase">Random</span>
            <span className="text-cyan uppercase">Gernerated</span>
          </div>
          <span
            id="searching-status"
            className={
              searchingStatus == "unsorted"
                ? "text-red uppercase"
                : "text-blue uppercase"
            }
          >
            {searchingStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArrayData;
