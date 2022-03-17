import React, { useState } from "react";
import SortingController from "./SortingController";
import SortingVisualizer from "./SortingVisualizer/Visualizer";

const Sorting = (props) => {
  const [elementWidth, setElementWidth] = useState(20);
  const [sortingDelay, setSortingDelay] = useState(300);

  return (
    <div>
      <SortingController
        funcName={props.funcName}
        sortingDelay={sortingDelay}
        elementWidth={elementWidth}
        setSortingDelay={setSortingDelay}
        setElementWidth={setElementWidth}
      />
      <SortingVisualizer
        sortingDelay={sortingDelay}
        htmlContent={props.htmlContent}
        code={props.code}
      />
    </div>
  );
};

export default Sorting;
