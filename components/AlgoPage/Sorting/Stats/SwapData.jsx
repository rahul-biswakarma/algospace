import { useSelector } from "react-redux";

export default function SwapData() {
  let ac = useSelector((state) => state.sorting.arrayCount);
  let swaps = useSelector((state) => state.sorting.swaps);
  return (
    <div className="hidden lg:flex flex-col h-[100%] font-space p-gap uppercase justify-between  border-b-[10px] border-b-green-bg">
      <div className="flex flex-col w-full">
        <div className="text-purple">
          Percentage{" "}
          <span className="text-green">{Math.round((swaps / ac) * 100)}</span>
        </div>
        <div className="text-text-1 text-[2.4rem]">
          <span>{swaps}</span>/<span>{ac}</span>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-green">Swaps</div>
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
