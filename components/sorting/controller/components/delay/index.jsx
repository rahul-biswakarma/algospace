import { v4 as uuidv4 } from "uuid";
import { Slider } from "@mui/material";

const DelaySlider = (props) => {
  return (
    <div id={props.id} className={props.Styles.SliderC}>
      Delay
      <Slider
        className={props.Styles.Slider}
        key={uuidv4()}
        defaultValue={props.sortingDelay}
        aria-label="Delay Slider"
        min={0}
        max={1000}
        valueLabelDisplay="off"
        onChangeCommitted={(e, val) => {
          props.setSortingDelay(e.target.value);
        }}
      />
    </div>
  );
};

export default DelaySlider;
