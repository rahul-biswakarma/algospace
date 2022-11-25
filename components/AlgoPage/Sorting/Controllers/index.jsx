import StartButton from "./StartButton";
import GenerateButton from "./GenerateButton";
import SpeedController from "./SpeedController";
import CountController from "./CountController";

export default function SortingControllers() {
  return (
    <div className="flex flex-row gap-gap py-gap w-full select-none h-[70px]">
      <GenerateButton />
      <SpeedController />
      <CountController />
      <StartButton />
    </div>
  );
}
