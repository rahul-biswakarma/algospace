import React from "react";
import * as SortingAlgorithms from "/components/AlgoPage/Sorting/SortingUtils/algorithms";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "/redux/reducers/sortingSlice";

const StartButton = () => {
  const algoId = useSelector((state) => state.page.algoId);
  const dispatch = useDispatch();

  const startAlgo = async (algoId) => {
    if (algoId === "bubble-sort") {
      await SortingAlgorithms.BubbleSort();
    }
    if (algoId === "selection-sort") {
      await SortingAlgorithms.SelectionSort();
    }
    if (algoId === "insertion-sort") {
      await SortingAlgorithms.InsertionSort();
    }
    if (algoId === "merge-sort") {
      await SortingAlgorithms.MergeSort();
    }
    dispatch(setStatus("sorted"));
  };

  return (
    <div
      className="w-full h-full max-w-[250px] bg-green-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-green text-lg hover:cursor-pointer hover:bg-green hover:text-bg-1 select-none"
      onClick={() => {
        startAlgo(algoId);
      }}
    >
      Start
    </div>
  );
};

export default StartButton;
