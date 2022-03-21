import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Slider } from "@mui/material";
import { Grid, Play } from "react-feather";
import { GenerateDisc } from "../../utils/TowerOfHanoi/TohUtils";
import Styles from "../../styles/sorting/SortingController.module.css";

const TowerOfHanoiController = (props) => {
  return (
    <div className={Styles.Container}>
      <button
        id="generatArrayButton"
        onClick={() => {
          GenerateDisc(props.discCount);
        }}
      >
        <Grid className={Styles.buttonIcons} />
        Generate Disc
      </button>
      <div className={Styles.SliderC}>
        Disc Count
        <Slider
          className={Styles.Slider}
          key={uuidv4()}
          defaultValue={props.discCount}
          aria-label="Array Element Count Slider"
          min={2}
          max={15}
          valueLabelDisplay="off"
          onChange={(e, val) => props.setDiscCount(val)}
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
      <button className={Styles.startSortingAlgo} id="startSortingAlgo">
        <Play className={Styles.buttonIcons} />
        Start
      </button>
    </div>
  );
};

export default TowerOfHanoiController;
