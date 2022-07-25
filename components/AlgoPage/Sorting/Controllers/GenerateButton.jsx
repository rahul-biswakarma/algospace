import React from "react";
import { useRecoilValue } from "recoil";
import { sortingBarWidthAtom } from "/recoil/atoms/sortingBarWidthAtom";
import { generateNewArray } from "/components/AlgoPage/Sorting/Utils/generateArray";

const GenerateButton = () => {
  const barWidth = useRecoilValue(sortingBarWidthAtom);

  return (  
    <div
      onClick={() => {
        generateNewArray(barWidth);
      }}
      className="relative w-full h-full max-w-[250px] bg-blue-bg flex justify-center items-center text-text-1 font-space uppercase select-none border-l-[10px] border-blue text-lg hover:cursor-pointer hover:bg-blue hover:text-bg-1"
    >
      Generate Array
    </div>
  );
};

export default GenerateButton;
