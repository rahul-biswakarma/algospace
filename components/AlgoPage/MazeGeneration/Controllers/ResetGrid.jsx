import React from "react";
import { useDispatch } from "react-redux";
import { setIsGenerating, setIsGenerated } from "/redux/reducers/mazeSlice";

import generateCellCount from "/components/AlgoPage/MazeGeneration/MazeUtils/generateCellCount";
import { setCurrentCell } from "/redux/reducers/mazeSlice";

const ResetGrid = () => {
  const dispatch = useDispatch();
  const resetGrid = () => {
    dispatch(setIsGenerating(false));
    dispatch(setIsGenerated(false));
    dispatch(setCurrentCell({ x: 0, y: 0 }));
    generateCellCount();
  };
  return (
    <div
      className="w-full h-full max-w-[250px] bg-red-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-red text-lg hover:cursor-pointer hover:bg-red hover:text-bg-1 select-none"
      onClick={() => {
        resetGrid();
      }}
    >
      Reset
    </div>
  );
};

export default ResetGrid;
