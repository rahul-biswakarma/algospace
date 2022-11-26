import { useSelector } from "react-redux";

export default function ArrayData() {
  let sortingStatus = useSelector(
    (state) => state.sorting.status
  ).toLowerCase();
  let compEle1 = useSelector((state) => state.sorting.compEle1);
  let compEle2 = useSelector((state) => state.sorting.compEle2);
  let swapEle1 = useSelector((state) => state.sorting.swapEle1);
  let swapEle2 = useSelector((state) => state.sorting.swapEle2);
  let specialEle = useSelector((state) => state.sorting.spclEle);
  let mergeArr1 = useSelector((state) => state.sorting.mergeArr1);
  let mergeArr2 = useSelector((state) => state.sorting.mergeArr2);

  return (
    <div className="flex flex-col font-space p-gap border-r-[1px] border-r-border-1 justify-between border-b-[10px] border-b-cyan-bg">
      <div className="flex gap-[0.2rem] text-text-1 flex-wrap text-[1.3rem]">
        <div
          className="flex gap-[0.2rem] text-text-1 flex-wrap text-[1.3rem]"
          id="sorting-array-data"
        >
          {useSelector((state) => state.sorting.array).map((element, index) => {
            return index == specialEle ? (
              <span
                key={index}
                className="noselect array-data text-red"
                id={`sortingStatsArray${index}`}
              >
                {element}
              </span>
            ) : index == swapEle1 || index == swapEle2 ? (
              <span
                key={index}
                className="noselect array-data text-purple"
                id={`sortingStatsArray${index}`}
              >
                {element}
              </span>
            ) : index == compEle1 || index == compEle2 ? (
              <span
                key={index}
                className="noselect array-data text-blue"
                id={`sortingStatsArray${index}`}
              >
                {element}
              </span>
            ) : index >= mergeArr1[0] && index <= mergeArr1[1] ? (
              <span
                key={index}
                className="noselect array-data text-red"
                id={`sortingStatsArray${index}`}
              >
                {element}
              </span>
            ) : index >= mergeArr2[0] && index <= mergeArr2[1] ? (
              <span
                key={index}
                className="noselect array-data text-purple"
                id={`sortingStatsArray${index}`}
              >
                {element}
              </span>
            ) : (
              <span
                key={index}
                className="noselect array-data"
                id={`sortingStatsArray${index}`}
              >
                {element}
              </span>
            );
          })}
        </div>
        <div className="text-green uppercase flex gap-gap">
          Total{" "}
          <span className="text-cyan" id="array-element-count">
            {useSelector((state) => state.sorting.arrayCount)}
          </span>
        </div>
      </div>
      <div className="flex justify-between pt-[3rem] text-[15px]">
        <div>
          <span className="text-green uppercase">Array</span>
        </div>
        <div className="flex gap-[1rem]">
          <div className="flex gap-gap">
            <span className="text-green uppercase">Random</span>
            <span className="text-cyan uppercase">Gernerated</span>
          </div>
          <span
            id="sorting-status"
            className={
              sortingStatus == "unsorted"
                ? "text-red uppercase"
                : "text-blue uppercase"
            }
          >
            {sortingStatus}
          </span>
        </div>
      </div>
    </div>
  );
}
