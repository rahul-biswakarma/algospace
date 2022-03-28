import { useEffect } from "react";
import Styles from "./styles.module.css";
import StartButon from "./components/start";
import CountSlider from "./components/count";
import DelaySlider from "./components/delay";
import GenerateButton from "./components/generate";
import { GenerateArray } from "/utils/Sorting/SortingUtils";
import * as SortingAlgo from "/utils/Sorting/SortingAlgorithms";

const SortingController = (props) => {
  useEffect(() => {
    try {
      GenerateArray(props.elementWidth);
    } catch {}
  }, []);

  const startAlgo = () => {
    // *** Need to modified when new alogs are added ***
    if (props.funcName == "BubbleSort") {
      SortingAlgo.BubbleSort(props.sortingDelay);
    } else if (props.funcName == "SelectionSort") {
      SortingAlgo.SelectionSort(props.sortingDelay);
    } else if (props.funcName == "MergeSort") {
      SortingAlgo.MergeSort(props.sortingDelay);
    }
  };

  return (
    <div className={Styles.Container}>
      <GenerateButton Styles={Styles} elementWidth={props.elementWidth} />
      <CountSlider
        Styles={Styles}
        elementWidth={props.elementWidth}
        setElementWidth={props.setElementWidth}
      />
      <DelaySlider
        Styles={Styles}
        sortingDelay={props.sortingDelay}
        setSortingDelay={props.setSortingDelay}
      />
      <StartButon Styles={Styles} startAlgo={startAlgo} />
    </div>
  );
};

export default SortingController;
