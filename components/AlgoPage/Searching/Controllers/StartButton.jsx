import { useDispatch, useSelector } from "react-redux";

import * as SearchingAlgorithms from "/components/AlgoPage/Searching/SearchingUtils/algorithms";
import {
  setStatus,
  resetStats,
  setIsSearching,
} from "/redux/reducers/searchingSlice";

export default function StartButton() {
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
    dispatch(setIsSearching(false));
  };

  return (
    <div className="relative w-full h-full lg:max-w-[250px] flex">
      {useSelector((state) => state.searching.isSearching) === false ? (
        <div
          className="w-full h-full bg-green-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-green text-[1rem] md:text-lg hover:cursor-pointer hover:bg-green hover:text-bg-1 select-none leading-[105%]"
          onClick={() => {
            startAlgo(algoId);
          }}
        >
          Search
        </div>
      ) : (
        <div
          className="w-full h-full bg-red-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-red text-[1rem] md:text-lg  hover:cursor-pointer hover:bg-red hover:text-bg-1 select-none leading-[105%]"
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
}
