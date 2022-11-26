import TimeData from "./TimeData";
import SwapsData from "./SwapsData";
import CountData from "./CountData";

export default function StatsContainer() {
  return (
    <div className="relative grid grid-cols-[100%] lg:grid-cols-[50%_50%] border-[1px] border-border-1 mt-gap select-none">
      <TimeData />
      <div className="grid grid-cols-[50%_50%]">
        <SwapsData />
        <CountData />
      </div>
    </div>
  );
}
