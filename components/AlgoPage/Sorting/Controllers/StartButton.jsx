import React from "react";
import { useRecoilValue } from "recoil";
import { algoIdAtom } from "/recoil/atoms/algoIdAtom";
import * as SortingAlgorithms from "/components/AlgoPage/Sorting/Utils/algorithms";

const StartButton = () => {
  const algoId = useRecoilValue(algoIdAtom);

  const startAlgo = async () => {
    if (algoId === "bubble-sort") {
      await SortingAlgorithms.BubbleSort();
    }
    if (algoId === "selection-sort") {
      await SortingAlgorithms.SelectionSort(10);
    }
    if (algoId === "insertion-sort") {
      await SortingAlgorithms.InsertionSort(10);
    }
    if (algoId === "merge-sort") {
      await SortingAlgorithms.MergeSort(10);
    }
    document.getElementById("sorting-status").innerHTML = "Sorted";
  };

  return (
    <div
      className="w-full h-full max-w-[250px] bg-green-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-green text-lg hover:cursor-pointer hover:bg-green hover:text-bg-1 select-none"
      onClick={() => {
        startAlgo();
      }}
    >
      Start
    </div>
  );
};

export default StartButton;
