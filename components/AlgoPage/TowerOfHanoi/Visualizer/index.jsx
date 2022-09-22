import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

import TopBar from "/components/TopBar";
import * as Colors from "/components/AlgoPage/Sorting/SortingUtils/colors.js";
import VisualizerEdgeLeftIcon from "/public/assets/visualizer-edge-left-icon.svg";
import VisualizerEdgeRightIcon from "/public/assets/visualizer-edge-right-icon.svg";

const VisualizerContainer = () => {
  let towerA = useSelector((state) => state.hanoi.towerA);
  let towerB = useSelector((state) => state.hanoi.towerB);
  let towerC = useSelector((state) => state.hanoi.towerC);
  const height = useSelector((state) => state.hanoi.height);

  let borderColor, bgColor;

  const ArrayBar = dynamic(
    () => {
      return import("./ArrayBar");
    },
    { ssr: false }
  );

  return (
    <div className="relative w-full h-[50vh] grid grid-cols-threeColsLayout gap-gap">
      <div
        id="visualizer-tower-a"
        className="relative height-full flex flex-col pb-[2rem] h-full w-full border-[1px] border-border-1 bg-bg-1"
      >
        <TopBar />
        <div className="absolute font-unica uppercase text-green-bg-4 p-gap">
          Tower A
        </div>
        <div
          id="towerA"
          className="flex flex-col justify-end items-center h-full w-full gap-gap"
        >
          {towerA
            ? towerA.map((width, index) => {
                borderColor = Colors.GREEN_BORDER_COLOR;
                bgColor = Colors.GREEN_BG_COLOR;
                return (
                  <ArrayBar
                    key={index}
                    height={height}
                    width={width}
                    borderColor={borderColor}
                    bgColor={bgColor}
                    id={"array-bar-" + index}
                  />
                );
              })
            : ""}
        </div>
        <div className="absolute bottom-0 left-0 mb-[-9px] ml-[-3px]">
          <Image
            className="scale-[0.8] opacity-60"
            src={VisualizerEdgeLeftIcon}
            alt="icon"
          />
        </div>
        <div className="absolute bottom-0 right-0 mb-[-9px] mr-[-3px]">
          <Image
            className="scale-[0.8] opacity-60"
            src={VisualizerEdgeRightIcon}
            alt="icon"
          />
        </div>
      </div>
      <div
        id="visualizer-tower-b"
        className="relative height-full flex flex-col pb-[2rem] h-full w-full border-[1px] border-border-1 bg-bg-1 hue-rotate-60"
      >
        <TopBar />
        <div className="absolute font-unica uppercase text-green-bg-4 p-gap">
          Tower B
        </div>
        <div
          id="towerB"
          className="flex flex-col justify-end items-center h-full w-full gap-gap"
        >
          {towerB
            ? towerB.map((width, index) => {
                borderColor = Colors.GREEN_BORDER_COLOR;
                bgColor = Colors.GREEN_BG_COLOR;
                return (
                  <ArrayBar
                    key={index}
                    height={height}
                    width={width}
                    borderColor={borderColor}
                    bgColor={bgColor}
                    id={"array-bar-" + index}
                  />
                );
              })
            : ""}
        </div>
        <div className="absolute bottom-0 left-0 mb-[-9px] ml-[-3px]">
          <Image
            className="scale-[0.8] opacity-60"
            src={VisualizerEdgeLeftIcon}
            alt="icon"
          />
        </div>
        <div className="absolute bottom-0 right-0 mb-[-9px] mr-[-3px]">
          <Image
            className="scale-[0.8] opacity-60"
            src={VisualizerEdgeRightIcon}
            alt="icon"
          />
        </div>
      </div>
      <div
        id="visualizer-tower-c"
        className="relative height-full flex flex-col pb-[2rem] h-full w-full border-[1px] border-border-1 bg-bg-1 hue-rotate-180"
      >
        <TopBar />
        <div className="absolute font-unica uppercase text-green-bg-4 p-gap">
          Tower C
        </div>
        <div
          id="towerC"
          className="flex flex-col justify-end items-center h-full w-full gap-gap"
        >
          {towerC
            ? towerC.map((width, index) => {
                borderColor = Colors.GREEN_BORDER_COLOR;
                bgColor = Colors.GREEN_BG_COLOR;
                return (
                  <ArrayBar
                    key={index}
                    height={height}
                    width={width}
                    borderColor={borderColor}
                    bgColor={bgColor}
                    id={"array-bar-" + index}
                  />
                );
              })
            : ""}
        </div>
        <div className="absolute bottom-0 left-0 mb-[-9px] ml-[-3px]">
          <Image
            className="scale-[0.8] opacity-60"
            src={VisualizerEdgeLeftIcon}
            alt="icon"
          />
        </div>
        <div className="absolute bottom-0 right-0 mb-[-9px] mr-[-3px]">
          <Image
            className="scale-[0.8] opacity-60"
            src={VisualizerEdgeRightIcon}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default VisualizerContainer;