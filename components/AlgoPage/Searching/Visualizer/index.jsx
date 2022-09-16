import React from "react";
import TopBar from "/components/TopBar";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import * as Colors from "/components/AlgoPage/Searching/SearchingUtils/colors.js";

const VisualizerContainer = () => {
  let heightArray = useSelector((state) => state.searching.array);
  const barWidth = useSelector((state) => state.searching.barWidth);

  let compEle = useSelector((state) => state.searching.compEle);

  let borderColor, bgColor;

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
          if (compEle == index) {
            borderColor = Colors.SELECTED_BORDER_COLOR;
            bgColor = Colors.SELECTED_BG_COLOR;
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
