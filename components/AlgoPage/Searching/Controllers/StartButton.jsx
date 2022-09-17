import React from "react";
import * as SearchingAlgorithms from "/components/AlgoPage/Searching/SearchingUtils/algorithms";
import { useDispatch, useSelector } from "react-redux";
import {
  setStatus,
  resetStats,
  setIsSearching,
} from "/redux/reducers/searchingSlice";

const StartButton = () => {
  const algoId = useSelector((state) => state.page.algoId);
  const dispatch = useDispatch();

  const startAlgo = async (algoId) => {
    dispatch(resetStats());
    dispatch(setIsSearching(true));
    if (algoId === "linear-search") {
      await SearchingAlgorithms.LinearSearch();
    }
    if (algoId === "binary-search") {
      await SearchingAlgorithms.BinarySearch();
    }
    if (algoId === "jump-search") {
      await SearchingAlgorithms.JumpSearch();
    }
    if (algoId === "interpolation-search") {
      await SearchingAlgorithms.InterpolationSearch();
    }
    dispatch(setIsSearching(false));
  };

  return (
    <div className="w-full h-full max-w-[250px]">
      {useSelector((state) => state.searching.isSearching) === false ? (
        <div
          className="w-full h-full max-w-[250px] bg-green-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-green text-lg hover:cursor-pointer hover:bg-green hover:text-bg-1 select-none"
          onClick={() => {
            startAlgo(algoId);
          }}
        >
          Search
        </div>
      ) : (
        <div
          className="w-full h-full max-w-[250px] bg-red-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-red text-lg hover:cursor-pointer hover:bg-red hover:text-bg-1 select-none"
          onClick={() => {
            dispatch(setIsSearching(false));
            dispatch(setStatus("not searching"));
          }}
        >
          Stop
        </div>
      )}
    </div>
  );
};

export default StartButton;
