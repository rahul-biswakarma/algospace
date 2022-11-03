import StartButton from "./StartButton";
import SpeedController from "./SpeedController";
import CountController from "./CountController";
import GenerateButton from "./GenerateButton";

export default function SearchingControllers() {
  return (
    <div className="flex flex-row gap-gap py-gap w-full h-[70px] select-none">
      <GenerateButton />
      <SpeedController />
      <CountController />
      <StartButton />
    </div>
  );
}
