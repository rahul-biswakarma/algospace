import React from "react";
import { batch, useDispatch, useSelector } from "react-redux";

import {
  setIsRunning,
  setStartTime,
  setEndTime,
} from "/redux/reducers/hanoiSlice";
import { TowerOfHanoi } from "/components/AlgoPage/TowerOfHanoi/HanoiUtils/algorithms";

const StartButton = () => {
  const algoId = useSelector((state) => state.page.algoId);
  const dispatch = useDispatch();

  const startAlgo = async () => {
    batch(() => {
      dispatch(setIsRunning(true));
      dispatch(setStartTime(Date.now()));
    });
    await TowerOfHanoi();
    batch(() => {
      dispatch(setIsRunning(false));
      dispatch(setEndTime(Date.now()));
    });
  };

  return (
    <div className="w-full h-full">
      {useSelector((state) => state.sorting.running) === false ? (
        <div
          className="w-full h-full bg-green-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-green text-lg hover:cursor-pointer hover:bg-green hover:text-bg-1 select-none"
          onClick={() => {
            startAlgo(algoId);
          }}
        >
          Start
        </div>
      ) : (
        <div
          className="w-full h-full bg-red-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-red text-lg hover:cursor-pointer hover:bg-red hover:text-bg-1 select-none"
          onClick={() => {
            dispatch(setIsRunning(false));
          }}
        >
          Stop
        </div>
      )}
    </div>
  );
};

export default StartButton;
