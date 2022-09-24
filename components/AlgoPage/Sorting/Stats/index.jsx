import SwapData from "./SwapData";
import ArrayData from "./ArrayData";
import ComparisonData from "./ComparisonData";

const StatsContainer = () => {
  return (
    <div className="relative grid grid-cols-threeStatsLayout border-[1px] border-border-1 mt-gap select-none">
      <ArrayData />
      <ComparisonData />
      <SwapData />
    </div>
  );
};

export default StatsContainer;
