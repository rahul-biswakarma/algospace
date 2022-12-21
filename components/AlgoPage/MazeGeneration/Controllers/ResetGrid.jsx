import React from "react";

import generateGrid from "/components/AlgoPage/MazeGeneration/MazeUtils/generateGrid";

const ResetGrid = () => {
  const resetGrid = () => {
    generateGrid();
  };
  return (
    <div
      className="relative w-full h-full lg:max-w-[250px] bg-red-bg flex justify-center items-center text-text-1 font-space uppercase select-none border-l-[10px] border-red text-[1rem] md:text-lg hover:cursor-pointer hover:bg-red hover:text-bg-1 leading-[105%]"
      onClick={() => {
        resetGrid();
      }}
    >
      Reset
    </div>
  );
};

export default ResetGrid;
