import { useSelector } from "react-redux";

export default function ComparisonData() {
  let ac = useSelector((state) => state.sorting.arrayCount);
  let comps = useSelector((state) => state.sorting.comparisons);
  return (
    <div className="hidden lg:flex flex-col h-[100%] font-space p-gap uppercase justify-between  border-b-[10px] border-b-green-bg border-r-[1px] border-r-border-1">
      <div className="flex flex-col ">
        <div className="text-purple">
          Percentage{" "}
          <span className="text-green">
            {Math.round((Number(comps) / Number(ac)) * 100)}
          </span>
        </div>
        <div className="text-text-1 text-[2.4rem]">
          <span>{Number(comps)}</span>/<span>{Number(ac)}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-green">Comparisons</div>
        <div className="text-green hidden xl:flex">
          Estimated{" "}
          <span className="text-blue" id="estimated-comparisons">
            XXX
          </span>
        </div>
      </div>
    </div>
  );
}
