import React from "react";
import { batch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import * as Algorithms from "../MazeUtils/algorithms";
import { setIsGenerating, setStatus } from "/redux/reducers/mazeSlice";

const StartButton = () => {
  const algoId = useSelector((state) => state.page.algoId);
  const dispatch = useDispatch();

  const startAlgo = async (algoId) => {
    dispatch(setIsGenerating(true));
    if (algoId === "dfs-maze") await Algorithms.DFSMazeGeneration();
    else if (algoId === "binary-tree-maze")
      await Algorithms.BFSMazeGeneration();
    else if (algoId === "recursive-division")
      await Algorithms.RecursiveDivisionMazeGeneration();
    else await Algorithms.KruskalMazeGeneration();
    dispatch(setIsGenerating(false));
  };

  return (
    <div className="relative w-full h-full lg:max-w-[250px] flex">
      {useSelector((state) => state.maze.isGenerating) === false ? (
        <div
          className="w-full h-full bg-green-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-green text-[1rem] md:text-lg hover:cursor-pointer hover:bg-green hover:text-bg-1 select-none leading-[105%]"
          onClick={() => {
            startAlgo(algoId);
          }}
        >
          Generate
        </div>
      ) : (
        <div
          className="w-full h-full bg-red-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-red text-[1rem] md:text-lg  hover:cursor-pointer hover:bg-red hover:text-bg-1 select-none leading-[105%]"
          onClick={() => {
            batch(() => {
              dispatch(setIsGenerating(false));
              dispatch(setStatus("maze generation stopped"));
            });
          }}
        >
          Stop
        </div>
      )}
    </div>
  );
};

export default StartButton;
