import { useSelector } from "react-redux";

export default function CountData() {
  let aCount = useSelector((state) => state.hanoi.aCount);
  let bCount = useSelector((state) => state.hanoi.bCount);
  let cCount = useSelector((state) => state.hanoi.cCount);
  let isRunning = useSelector((state) => state.hanoi.isRunning);
  return (
    <div className="flex flex-col h-full font-space p-gap uppercase justify-between  border-b-[10px] border-b-green-bg border-r-[1px] border-r-border-1 text-[16px] md:text-[18px]">
      <div className="flex flex-col">
        <div className="text-text-1 text-[1rem] md:text-[1.3rem]">
          <div className="text-text-1">
            A <span className="text-cyan">{` ${aCount}`}</span>
          </div>
          <div className="text-text-1">
            B <span className="text-cyan">{` ${bCount}`}</span>
          </div>
          <div className="text-text-1">
            C <span className="text-cyan">{` ${cCount}`}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-[10px]">
        <div className="text-purple">Disc Count</div>
        <div className="text-cyan text-right">
          {isRunning ? (
            <span>Running</span>
          ) : (
            <span className="text-red">Not Running</span>
          )}
        </div>
      </div>
    </div>
  );
}
