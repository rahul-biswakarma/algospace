import React from "react";

const SwapData = () => {
  return (
    <div className="flex flex-col h-full font-space p-gap uppercase border-r-[1px] border-r-border-1 justify-between border-b-[10px] border-b-purple-bg">
      <div className="flex flex-col items-stretch">
        <div className="text-purple">
          Percentage{" "}
          <span className="text-green" id="swap-percent">
            0
          </span>
        </div>
        <div className="text-text-1 text-[2.5rem]">
          <span id="swaps-count">0</span>/
          <span id="array-element-count-swap">0</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-green">Swaps</div>
        <div className="text-green">
          Estimated{" "}
          <span className="text-blue" id="estimated-swaps">
            XXX
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwapData;
