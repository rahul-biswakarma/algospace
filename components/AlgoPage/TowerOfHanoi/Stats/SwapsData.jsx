import { useSelector } from "react-redux";

export default function SwapsData() {
  let abSwap = useSelector((state) => state.hanoi.abSwap);
  let bcSwap = useSelector((state) => state.hanoi.bcSwap);
  let acSwap = useSelector((state) => state.hanoi.acSwap);
  return (
    <div className="flex flex-col h-full font-space p-gap uppercase justify-between  border-b-[10px] border-b-green-bg border-r-[1px] border-r-border-1 ">
      <div className="flex flex-col">
        <div className="text-text-1 text-[1rem] md:text-[1.3rem]">
          <div className="text-text-1">
            From A to B <span className="text-cyan">{` ${abSwap}`}</span>
          </div>
          <div className="text-text-1">
            From B to C <span className="text-cyan">{` ${bcSwap}`}</span>
          </div>
          <div className="text-text-1">
            From A to C <span className="text-cyan">{` ${acSwap}`}</span>
          </div>
        </div>
      </div>
      <div className="text-purple">
        Total Swaps{" "}
        <span className="text-green">{abSwap + bcSwap + acSwap}</span>
      </div>
    </div>
  );
}
