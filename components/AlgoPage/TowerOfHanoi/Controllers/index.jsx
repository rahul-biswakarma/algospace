import React from "react";
import StartButton from "./StartButton";
import GenerateButton from "./GenerateButton";
import SpeedController from "./SpeedController";
import CountController from "./CountController";

const HanoiControllers = () => {
  return (
    <div className="flex flex-row gap-gap py-gap w-full h-[70px]">
      <GenerateButton />
      <CountController />
      <SpeedController />
      <StartButton />
    </div>
  );
};

export default HanoiControllers;
