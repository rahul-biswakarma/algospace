import React from "react";
import TopBar from "./TopBar";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const VisualizerContainer = () => {
  let heightArray = useSelector((state) => state.sorting.array);
  const barWidth = useSelector((state) => state.sorting.barWidth);

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
        className="flex justify-center items-end pb-[2rem] flex-row h-full w-full "
      >
        {heightArray.map((height, index) => {
          return <ArrayBar key={index} height={height} width={barWidth} />;
        })}
      </div>
    </div>
  );
};

export default VisualizerContainer;
