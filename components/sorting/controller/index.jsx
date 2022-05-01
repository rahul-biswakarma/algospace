import { useEffect } from "react";
import Styles from "./styles.module.css";
import StartButton from "./components/start";
import CountSlider from "./components/count";
import DelaySlider from "./components/delay";
import EnableButton from "/utils/EnableButtons";
import DisableButton from "/utils/DisableButtons";
import GenerateButton from "./components/generate";
import VisualizerFinisher from "/utils/VisualizerFinisher";
import { GenerateArray } from "/utils/Sorting/SortingUtils";
import updateFunctionStatus from "/utils/UpdateFunctionStatus";
import * as SortingAlgo from "/utils/Sorting/SortingAlgorithms";

const SortingController = (props) => {
  useEffect(() => {
    try {
      GenerateArray(props.elementWidth);
    } catch {}
  }, []);

  const startAlgo = async () => {
    updateFunctionStatus(1);

    DisableButton(
      ["sorting-generate", "sorting-count", "sorting-delay"],
      ["sorting-start", "sorting-stop"]
    );

    // *** Need to modified when new alogs are added ***
    if (props.funcName == "BubbleSort") {
      await SortingAlgo.BubbleSort(props.sortingDelay);
    } else if (props.funcName == "SelectionSort") {
      await SortingAlgo.SelectionSort(props.sortingDelay);
    } else if (props.funcName == "MergeSort") {
      await SortingAlgo.MergeSort(props.sortingDelay);
    }

    await VisualizerFinisher("sorting-array-c", "Sorting Completed 👌");

    EnableButton(
      ["sorting-generate", "sorting-count", "sorting-delay"],
      ["sorting-start", "sorting-stop"]
    );
  };

  return (
    <div className={Styles.Container}>
      <GenerateButton
        id="sorting-generate"
        Styles={Styles}
        elementWidth={props.elementWidth}
      />
      <CountSlider
        id="sorting-count"
        Styles={Styles}
        elementWidth={props.elementWidth}
        setElementWidth={props.setElementWidth}
      />
      <DelaySlider
        id="sorting-delay"
        Styles={Styles}
        sortingDelay={props.sortingDelay}
        setSortingDelay={props.setSortingDelay}
      />
      <StartButton
        id="sorting-start"
        stopId="sorting-stop"
        Styles={Styles}
        startAlgo={startAlgo}
        GenerateArray={GenerateArray}
      />
    </div>
  );
};

export default SortingController;
