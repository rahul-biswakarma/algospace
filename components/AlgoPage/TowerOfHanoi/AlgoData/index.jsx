import PrismTheme from "/utils/PrismTheme";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import Data from "/public/data/algorithmData.json";

export default function AlgoData() {
  let algoName = "Tower Of Hanoi";
  let currAlgo = "TowerOfHanoi";
  let currAlgoData = Data[currAlgo];
  if (currAlgoData) {
    return (
      <div>
        <div className="w-full h-[150px] bg-green-bg mt-gap font-space text-[1.5rem] lg:text-[2rem] text-text-1 flex items-center uppercase justify-center text-center p-[10px]">
          More About {algoName}
        </div>
        <div className="flex flex-col-reverse gap-gap my-gap">
          <div
            id="algo-code-container"
            className="w-full h-full font-space border-[1px] border-border-1"
          >
            <SyntaxHighlighter
              language="cpp"
              wrapLines={true}
              style={PrismTheme}
              showLineNumbers={true}
            >
              {currAlgoData.code}
            </SyntaxHighlighter>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 w-full h-full font-space text-green gap-gap">
            <div className="border-[1px] border-border-1 px-[2rem] py-[1.5rem] flex flex-col gap-[2rem]">
              <div className="uppercase text-center">Time Complexity</div>
              <div className="text-text-1 flex flex-col gap-[1rem]">
                <span className="flex justify-between">
                  Best Case{" "}
                  <span className="text-blue">
                    {currAlgoData.timeComplexity.best}
                  </span>
                </span>
                <span className="flex justify-between">
                  Average Case{" "}
                  <span className="text-blue">
                    {currAlgoData.timeComplexity.average}
                  </span>
                </span>
                <span className="flex justify-between">
                  Worst Case{" "}
                  <span className="text-red">
                    {currAlgoData.timeComplexity.worst}
                  </span>
                </span>
              </div>
            </div>
            <div className="border-[1px] border-border-1 px-[2rem] py-[1.5rem] flex flex-col gap-[2rem]">
              <div className="uppercase text-center">Space Complexity</div>
              <div className="text-text-1 flex flex-col gap-[1rem]">
                <span className="flex justify-between">
                  Best Case{" "}
                  <span className="text-blue">
                    {currAlgoData.spaceComplexity.best}
                  </span>
                </span>
                <span className="flex justify-between">
                  Average Case{" "}
                  <span className="text-blue">
                    {currAlgoData.spaceComplexity.average}
                  </span>
                </span>
                <span className="flex justify-between">
                  Worst Case{" "}
                  <span className="text-red">
                    {currAlgoData.spaceComplexity.worst}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
