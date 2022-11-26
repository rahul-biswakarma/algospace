import { useSelector } from "react-redux";

export default function TimeData() {
  let startTime = useSelector((state) => state.hanoi.startTime);
  let endTime = useSelector((state) => state.hanoi.endTime);
  const startDate = new Date(startTime * 1000);
  const endDate = new Date(endTime * 1000);
  return (
    <div className="hidden lg:flex flex-col h-full font-space p-gap uppercase justify-between  border-b-[10px] border-b-green-bg border-r-[1px] border-r-border-1 ">
      <div className="flex flex-col min-h-[150px]">
        <div className="text-green flex flex-row justify-between gap-gap">
          <div className="text-purple">Time Taken</div>
          <div>
            Start Time <span className="text-blue">{startTime}</span>
            <span className="text-purple">ms</span>
          </div>
        </div>
        <div className="text-text-1 text-[2.4rem]">
          <span>{endTime - startTime >= 0 ? endTime - startTime : 0}</span>
          ms
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-green">
          End Time{" "}
          <span className="text-blue">
            {startDate == endDate ? 0 : endTime}
          </span>
          <span className="text-purple">ms</span>
        </div>
        <div className="text-green">
          Estimated{" "}
          <span className="text-blue" id="estimated-comparisons">
            XXX
          </span>
        </div>
      </div>
    </div>
  );
}
