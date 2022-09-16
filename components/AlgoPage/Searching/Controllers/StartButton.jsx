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
    dispatch(setRunning(true));
    if (algoId === "linear-search") {
      let res = await SearchingAlgorithms.LinearSearch();
    }
    if (algoId === "binary-search") {
      let res = await SearchingAlgorithms.BinarySearch();
    }
    dispatch(setIsSearching(false));
    if (res != -1) dispatch(setStatus("found"));
    else dispatch(setStatus("not found"));
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
          Sort
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
