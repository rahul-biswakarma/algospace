import { v4 as uuidv4 } from "uuid";
import { Slider } from "@mui/material";

const CountSlider = (props) => {
  return (
    <div id={props.id} className={props.Styles.SliderC}>
      Array Count
      <Slider
        className={props.Styles.Slider}
        key={uuidv4()}
        defaultValue={props.elementWidth}
        aria-label="Array Element Count Slider"
        min={0}
        max={35}
        valueLabelDisplay="off"
        onChangeCommitted={(e, val) => props.setElementWidth(val)}
      />
    </div>
  );
};

export default CountSlider;
