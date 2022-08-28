import React from "react";
import { useSelector } from "react-redux";

const ComparisonData = () => {
  return (
    <div className="flex flex-col h-full font-space p-gap uppercase justify-between  border-b-[10px] border-b-green-bg">
      <div className="flex flex-col ">
        <div className="text-purple">
          Percentage{" "}
          <span className="text-green" id="comparison-percent">
            {Math.round(
              (useSelector((state) => state.sorting.comparisons) /
                useSelector((state) => state.sorting.arrayCount)) *
                100
            )}
          </span>
        </div>
        <div className="text-text-1 text-[2.4rem]">
          <span id="comparisons-count">
            {useSelector((state) => state.sorting.comparisons)}
          </span>
          /
          <span id="array-element-count-comp">
            {useSelector((state) => state.sorting.arrayCount)}
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-green">Comparisons</div>
        <div className="text-green">
          Estimated{" "}
          <span className="text-blue" id="estimated-comparisons">
            XXX
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComparisonData;
