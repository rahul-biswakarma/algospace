import React from "react";
import { useSelector } from "react-redux";

const ComparisonData = () => {
  let ac = useSelector((state) => state.sorting.arrayCount);
  let comps = useSelector((state) => state.sorting.comparisons);
  return (
    <div className="flex flex-col h-full font-space p-gap uppercase justify-between  border-b-[10px] border-b-green-bg">
      <div className="flex flex-col ">
        <div className="text-purple">
          Percentage{" "}
          <span className="text-green">
            {Math.round((Number(comps) / Number(ac)) * 100)}
          </span>
        </div>
        <div className="text-text-1 text-[2.4rem]">
          <span>{Number(comps)}</span>/<span>{Number(ac)}</span>
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
