import React from "react";
import TopBar from "./TopBar";
import dynamic from "next/dynamic";
import { useRecoilValue } from "recoil";
import { arrayAtom } from "/recoil/atoms/arrayAtom";
import { sortingBarWidthAtom } from "/recoil/atoms/sortingBarWidthAtom";

const VisualizerContainer = () => {
  const heightArray = useRecoilValue(arrayAtom);
  const barWidth = useRecoilValue(sortingBarWidthAtom);
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
