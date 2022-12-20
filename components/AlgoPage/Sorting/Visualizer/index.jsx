import React from "react";
import TopBar from "/components/TopBar";
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
  let spclEle = useSelector((state) => state.sorting.spclEle);
  let mergeArr1 = useSelector((state) => state.sorting.mergeArr1);
  let mergeArr2 = useSelector((state) => state.sorting.mergeArr2);
  let currentAlgo = useSelector((state) => state.page.algoId);

  let borderColor, bgColor;

  const ArrayBar = dynamic(
    () => {
      return import("./ArrayBar");
    },
    { ssr: false }
  );

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] border-[1px] border-border-1 bg-graphPattern select-none">
      <TopBar />
      <div
        id="visualizer-container"
        className="flex justify-center items-end pb-[2rem] flex-row h-full w-full transition-all ease-linear duration-100"
      >
        {heightArray.map((height, index) => {
          if (spclEle == index) {
            borderColor = Colors.RED_BORDER_COLOR;
            bgColor = Colors.RED_BG_COLOR;
          } else if (index >= mergeArr1[0] && index <= mergeArr1[1]) {
            borderColor = Colors.RED_BORDER_COLOR;
            bgColor = Colors.RED_BG_COLOR;
          } else if (index >= mergeArr2[0] && index <= mergeArr2[1]) {
            borderColor = Colors.SWAPED_BORDER_COLOR;
            bgColor = Colors.SWAPED_BG_COLOR;
          } else if (
            (compEle1 == index || compEle2 == index) &&
            (swapEle1 == index || swapEle2 == index)
          ) {
            borderColor = Colors.SWAPED_BORDER_COLOR;
            bgColor = Colors.SWAPED_BG_COLOR;
          } else if (compEle1 == index || compEle2 == index) {
            borderColor = Colors.SELECTED_BORDER_COLOR;
            bgColor = Colors.SELECTED_BG_COLOR;
          } else if (swapEle1 == index || swapEle2 == index) {
            borderColor = Colors.SWAPED_BORDER_COLOR;
            bgColor = Colors.SWAPED_BG_COLOR;
          } else {
            borderColor = Colors.DEFAULT_BORDER_COLOR;
            bgColor = Colors.DEFAULT_BG_COLOR;
          }

          return (
            <ArrayBar
              key={index}
              height={height}
              width={barWidth}
              borderColor={borderColor}
              bgColor={bgColor}
              id={"array-bar-" + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VisualizerContainer;
