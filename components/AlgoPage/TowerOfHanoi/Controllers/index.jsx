import StartButton from "./StartButton";
import GenerateButton from "./GenerateButton";
import SpeedController from "./SpeedController";
import CountController from "./CountController";

export default function HanoiControllers() {
  return (
    <div className="flex flex-row gap-gap p-gap w-full h-[70px] select-none">
      <GenerateButton />
      <CountController />
      <SpeedController />
      <StartButton />
    </div>
  );
}
