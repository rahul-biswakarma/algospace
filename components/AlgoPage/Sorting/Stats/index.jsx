import SwapData from "./SwapData";
import ArrayData from "./ArrayData";
import ComparisonData from "./ComparisonData";

const StatsContainer = () => {
  return (
    <div className="relative grid grid-cols-statsLayout border-[1px] border-border-1 mt-gap">
      <ArrayData />
      <SwapData />
      <ComparisonData />
    </div>
  );
};

export default StatsContainer;
