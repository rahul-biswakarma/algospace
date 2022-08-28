import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { CodeTheme } from "/utils/ReactCodeBlockTheme";

const AlgoDataContainer = (props) => {
  return (
    <div>
      <div className="w-full h-[150px] bg-green-bg mt-gap font-space text-[2rem] text-text-1 flex items-center uppercase justify-center">
        More About {props.algoName}
      </div>
      <div className="grid grid-cols-algoDataLayout gap-gap my-gap">
        <div className="w-full h-full font-space border-[1px] border-border-1">
          <CopyBlock
            text={"for(int i=0; i<n; i++){cout<<i<<endl;}"}
            language={"cpp"}
            showLineNumbers={false}
            theme={dracula}
            wrapLines
          />
        </div>
        <div className="w-full h-full font-space text-green flex flex-col gap-gap">
          <div className="border-[1px] border-border-1 px-[2rem] py-[1.5rem] flex flex-col gap-[2rem]">
            <div className="uppercase text-center">Time Complexity</div>
            <div className="text-text-1 flex flex-col gap-[1rem]">
              <span className="flex justify-between">
                Best Case <span className="text-blue">O</span>
              </span>
              <span className="flex justify-between">
                Average Case <span className="text-blue">O</span>
              </span>
              <span className="flex justify-between">
                Worst Case <span className="text-red">O</span>
              </span>
            </div>
          </div>
          <div className="border-[1px] border-border-1 px-[2rem] py-[1.5rem] flex flex-col gap-[2rem]">
            <div className="uppercase text-center">Space Complexity</div>
            <div className="text-text-1 flex flex-col gap-[1rem]">
              <span className="flex justify-between">
                Best Case <span className="text-blue">O</span>
              </span>
              <span className="flex justify-between">
                Average Case <span className="text-blue">O</span>
              </span>
              <span className="flex justify-between">
                Worst Case <span className="text-red">O</span>
              </span>
            </div>
          </div>
          <div className="border-[1px] border-border-1 px-[2rem] py-[1.5rem] flex flex-col gap-[2rem]">
            <div className="uppercase text-center">Stability</div>
            <div className="text-text-1 text-center">Yes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoDataContainer;
