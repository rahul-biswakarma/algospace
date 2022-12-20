import React from "react";
import { batch, useDispatch } from "react-redux";
import { setIsGenerating, setIsGenerated } from "/redux/reducers/mazeSlice";

import generateCellCount from "/components/AlgoPage/MazeGeneration/MazeUtils/generateCellCount";
import { setCurrentCell } from "/redux/reducers/mazeSlice";

const ResetGrid = () => {
  const dispatch = useDispatch();
  const resetGrid = () => {
    batch(() => {
      dispatch(setIsGenerating(false));
      dispatch(setIsGenerated(false));
      dispatch(setCurrentCell({ x: 0, y: 0 }));
    });
    generateCellCount();
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
