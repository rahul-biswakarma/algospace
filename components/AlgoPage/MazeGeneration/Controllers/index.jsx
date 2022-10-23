import React from "react";

import StartButton from "./StartButton";
import ResetGrid from "./ResetGrid";
import CountController from "./CountSlider";
import SpeedController from "./SpeedSlider";

const MazeGenerationControllers = () => {
  return (
    <div className="flex flex-row gap-gap py-gap w-full h-[70px] select-none">
      <StartButton />
      <SpeedController />
      <CountController />
      <ResetGrid />
    </div>
  );
};

export default MazeGenerationControllers;
