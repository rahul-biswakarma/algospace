import { useSelector } from "react-redux";

export default function ArrayData() {
  let searchingStatus = useSelector(
    (state) => state.searching.status
  ).toLowerCase();
  let compEle = useSelector((state) => state.searching.compEle);
  let target = useSelector((state) => state.searching.target);
  let leftRange = useSelector((state) => state.searching.rangeLeft);
  let rightRange = useSelector((state) => state.searching.rangeRight);
  return (
    <div className="flex flex-col font-space p-gap border-r-[1px] border-r-border-1 justify-between border-b-[10px] border-b-cyan-bg">
      <div className="flex justify-between gap-[2rem] text-[15px]">
        <div
          className="flex gap-[0.2rem] text-text-1 flex-wrap text-[1.3rem]"
          id="searching-array-data"
        >
          {useSelector((state) => state.searching.array).map(
            (element, index) => {
              return target == element ? (
                <span
                  key={index}
                  className="noselect array-data text-green"
                  id={`searchingStatsArray${index}`}
                >
                  {element}
                </span>
              ) : compEle == index ? (
                <span
                  key={index}
                  className="noselect array-data text-red"
                  id={`searchingStatsArray${index}`}
                >
                  {element}
                </span>
              ) : index >= leftRange && index <= rightRange ? (
                <span
                  key={index}
                  className="noselect array-data text-blue"
                  id={`searchingStatsArray${index}`}
                >
                  {element}
                </span>
              ) : (
                <span
                  key={index}
                  className="noselect array-data"
                  id={`searchingStatsArray${index}`}
                >
                  {element}
                </span>
              );
            }
          )}
        </div>
        <div className="text-green uppercase flex gap-gap">
          Total{" "}
          <span className="text-cyan" id="array-element-count">
            {useSelector((state) => state.searching.arrayCount)}
          </span>
        </div>
      </div>
      <div className="flex justify-between pt-[3rem] text-[15px]">
        <div>
          <span className="text-green uppercase">Array</span>
        </div>
        <div className="flex gap-[1rem]">
          <div className="flex gap-[1rem]">
            <span className="text-green uppercase">Random</span>
            <span className="text-cyan uppercase">Gernerated</span>
          </div>
          <span
            id="searching-status"
            className={
              searchingStatus != "found"
                ? "text-red uppercase"
                : "text-blue uppercase"
            }
          >
            {searchingStatus}
          </span>
        </div>
      </div>
    </div>
  );
}
