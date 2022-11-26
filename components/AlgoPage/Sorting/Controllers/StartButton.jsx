import { useDispatch, useSelector } from "react-redux";

import {
  setStatus,
  resetStats,
  setRunning,
} from "/redux/reducers/sortingSlice";
import * as SortingAlgorithms from "/components/AlgoPage/Sorting/SortingUtils/algorithms";

export default function StartButton() {
  const algoId = useSelector((state) => state.page.algoId);
  const dispatch = useDispatch();

  const startAlgo = async (algoId) => {
    dispatch(resetStats());
    dispatch(setRunning(true));
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
    dispatch(setRunning(false));
    dispatch(setStatus("sorted"));
  };

  return (
    <div className="relative w-full h-full lg:max-w-[250px] flex">
      {useSelector((state) => state.sorting.running) === false ? (
        <div
          className="w-full h-full bg-green-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-green text-[1rem] md:text-lg hover:cursor-pointer hover:bg-green hover:text-bg-1 select-none leading-[105%]"
          onClick={() => {
            startAlgo(algoId);
          }}
        >
          Sort
        </div>
      ) : (
        <div
          className="w-full h-full bg-red-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-red text-[1rem] md:text-lg  hover:cursor-pointer hover:bg-red hover:text-bg-1 select-none leading-[105%]"
          onClick={() => {
            dispatch(setRunning(false));
          }}
        >
          Stop
        </div>
      )}
    </div>
  );
}
