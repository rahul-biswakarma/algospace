import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Slider } from "@mui/material";
import { Grid, Play } from "react-feather";
import { GenerateArray } from "../../utils/SortingUtils";
import * as SortingAlgo from "../../utils/SortAlgorithms";
import Styles from "../../styles/sorting/SortingController.module.css";

const SortingController = (props) => {
  var sortingFunc;

  useEffect(() => {
    // document.getElementById("sorting-array-c");
    try {
      GenerateArray(props.elementWidth);
    } catch {}
  }, []);

  // const generateArray = () => {
  //   GenerateArray(props.elementWidth);
  // };

  const startAlgo = () => {
    // Need to modified when new alogs are added
    if (props.funcName == "BubbleSort") {
      sortingFunc = SortingAlgo.BubbleSort(props.sortingDelay);
    }
  };

  return (
    <div className={Styles.Container}>
      <button
        id="generatArrayButton"
        onClick={() => {
          GenerateArray(props.elementWidth);
        }}
      >
        <Grid className={Styles.buttonIcons} />
        Generate Array
      </button>
      <div className={Styles.SliderC}>
        Array Count
        <Slider
          className={Styles.Slider}
          key={uuidv4()}
          defaultValue={props.elementWidth}
          aria-label="Array Element Count Slider"
          min={0}
          max={35}
          valueLabelDisplay="off"
          onChange={(e, val) => props.setElementWidth(val)}
        />
      </div>
      <div className={Styles.SliderC}>
        Delay
        <Slider
          className={Styles.Slider}
          key={uuidv4()}
          defaultValue={props.sortingDelay}
          aria-label="Delay Slider"
          min={0}
          max={1000}
          valueLabelDisplay="off"
          onChange={(e, val) => props.setSortingDelay(val)}
        />
      </div>
      <button
        className={Styles.startSortingAlgo}
        id="startSortingAlgo"
        onClick={startAlgo}
      >
        <Play className={Styles.buttonIcons} />
        Start
      </button>
    </div>
  );
};

export default SortingController;
