import React from "react";
import StartButton from "./StartButton";
import SpeedController from "./SpeedController";
import CountController from "./CountController";
import GenerateButton from "./GenerateButton";

const SortingControllers = () => {
  return (
    <div className="flex flex-row gap-gap py-gap w-full h-[70px]">
      <GenerateButton />
      <SpeedController />
      <CountController />
      <StartButton />
    </div>
  );
};

export default SortingControllers;
