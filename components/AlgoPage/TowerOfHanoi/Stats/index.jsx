import TimeData from "./TimeData";
import SwapsData from "./SwapsData";
import CountData from "./CountData";

const StatsContainer = () => {
  return (
    <div className="relative grid grid-cols-[50%_25%_25%] border-[1px] border-border-1 mt-gap select-none">
      <TimeData />
      <SwapsData />
      <CountData />
    </div>
  );
};

export default StatsContainer;
