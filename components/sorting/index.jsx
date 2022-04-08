import { useState } from "react";
import { motion } from "framer-motion";
import SortingController from "./controller";
import SortingVisualizer from "./visualizer";

const Sorting = (props) => {
  const [elementWidth, setElementWidth] = useState(20);
  const [sortingDelay, setSortingDelay] = useState(300);

  return (
    <motion.div
      initial={{ y: "-15%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ ease: "easeOut" }}
    >
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
    </motion.div>
  );
};

export default Sorting;
