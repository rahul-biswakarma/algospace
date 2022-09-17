import ArrayData from "./ArrayData";
import ComparisonData from "./ComparisonData";
import TargetData from "./TargetData";

const StatsContainer = () => {
  return (
    <div className="relative grid grid-cols-twoStatsLayout border-[1px] border-border-1 mt-gap">
      <ArrayData />
      <ComparisonData />
    </div>
  );
};

export default StatsContainer;
