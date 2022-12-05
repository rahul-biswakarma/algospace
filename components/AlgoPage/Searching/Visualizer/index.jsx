import TopBar from "/components/TopBar";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

import TargetContainer from "./targetContainer";
import * as Colors from "/components/AlgoPage/Searching/SearchingUtils/colors.js";

export default function VisualizerContainer() {
  const heightArray = useSelector((state) => state.searching.array);
  const barWidth = useSelector((state) => state.searching.barWidth);
  const compEle = useSelector((state) => state.searching.compEle);
  const targetEle = useSelector((state) => state.searching.target);
  const foundIndex = useSelector((state) => state.searching.foundIndex);
  const low = useSelector((state) => state.searching.rangeLeft);
  const high = useSelector((state) => state.searching.rangeRight);

  let borderColor, bgColor;
  let isCurrEle = false;

  const ArrayBar = dynamic(
    () => {
      return import("./ArrayBar");
    },
    { ssr: false }
  );

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] border-[1px] border-border-1 bg-graphPattern overflow-hidden select-none">
      <TopBar />
      <TargetContainer />
      <div
        id="visualizer-container"
        className="flex justify-center items-end pb-[2rem] flex-row h-full w-full"
      >
        {heightArray.map((height, index) => {
          if (compEle == index && foundIndex == -1) {
            isCurrEle = true;
            borderColor = Colors.SELECTED_BORDER_COLOR;
            bgColor = Colors.SELECTED_BG_COLOR;
          } else if (compEle == index && foundIndex != -1) {
            isCurrEle = true;
            borderColor = Colors.TARGET_BORDER_COLOR;
            bgColor = Colors.TARGET_BG_COLOR;
          } else {
            isCurrEle = false;
            borderColor = Colors.DEFAULT_BORDER_COLOR;
            bgColor = Colors.DEFAULT_BG_COLOR;
          }
          if (index >= low && index <= high) {
            borderColor = Colors.SELECTED_BORDER_COLOR;
            bgColor = Colors.SELECTED_BG_COLOR;
          }
          return (
            <ArrayBar
              key={index}
              height={height}
              width={barWidth}
              borderColor={borderColor}
              bgColor={bgColor}
              id={"array-bar-" + index}
              currEle={isCurrEle}
              targetHeight={targetEle}
            />
          );
        })}
      </div>
    </div>
  );
}
