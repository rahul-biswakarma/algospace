import React from "react";
import TopBar from "./TopBar";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import * as Colors from "/components/AlgoPage/Sorting/SortingUtils/colors.js";

const VisualizerContainer = () => {
  let heightArray = useSelector((state) => state.sorting.array);
  const barWidth = useSelector((state) => state.sorting.barWidth);

  let compEle1 = useSelector((state) => state.sorting.compEle1);
  let compEle2 = useSelector((state) => state.sorting.compEle2);
  let swapEle1 = useSelector((state) => state.sorting.swapEle1);
  let swapEle2 = useSelector((state) => state.sorting.swapEle2);

  const ArrayBar = dynamic(
    () => {
      return import("./ArrayBar");
    },
    { ssr: false }
  );

  return (
    <div className="relative w-full h-[70vh] border-[1px] border-border-1 bg-graphPattern">
      <TopBar />
      <div
        id="visualizer-container"
        className="flex justify-center items-end pb-[2rem] flex-row h-full w-full"
      >
        {heightArray.map((height, index) => {
          if (
            (compEle1 == index || compEle2 == index) &&
            (swapEle1 == index || swapEle2 == index)
          ) {
            return (
              <ArrayBar
                key={index}
                height={height}
                width={barWidth}
                borderColor={Colors.SWAPED_BORDER_COLOR}
                bgColor={Colors.SWAPED_BG_COLOR}
                id={"array-bar-" + index}
              />
            );
          } else if (compEle1 == index || compEle2 == index) {
            return (
              <ArrayBar
                key={index}
                height={height}
                width={barWidth}
                borderColor={Colors.SELECTED_BORDER_COLOR}
                bgColor={Colors.SELECTED_BG_COLOR}
                id={"array-bar-" + index}
              />
            );
          } else if (swapEle1 == index || swapEle2 == index) {
            return (
              <ArrayBar
                key={index}
                height={height}
                width={barWidth}
                borderColor={Colors.SWAPED_BORDER_COLOR}
                bgColor={Colors.SWAPED_BG_COLOR}
                id={"array-bar-" + index}
              />
            );
          } else {
            return (
              <ArrayBar
                key={index}
                height={height}
                width={barWidth}
                borderColor={Colors.DEFAULT_BORDER_COLOR}
                bgColor={Colors.DEFAULT_BG_COLOR}
                id={"array-bar-" + index}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default VisualizerContainer;
