import StartButton from "./StartButton";
import GenerateButton from "./GenerateButton";
import SpeedController from "./SpeedController";
import CountController from "./CountController";

export default function SortingControllers() {
  return (
    <div className="relative flex flex-row flex-wrap lg:grid lg:grid-cols-threeStatsLayout border-[1px] border-border-1 mt-gap select-none">
      <GenerateButton />
      <SpeedController />
      <CountController />
      <StartButton />
    </div>
  );
}
