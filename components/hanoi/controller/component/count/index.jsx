import { v4 as uuidv4 } from "uuid";
import { Slider } from "@mui/material";

const CountSlider = (props) => {
  return (
    <div id={props.id} className={props.Styles.SliderC}>
      Disc Count
      <Slider
        id="count-slider"
        className={props.Styles.Slider}
        key={uuidv4()}
        defaultValue={props.discCount}
        aria-label="Array Element Count Slider"
        min={2}
        max={15}
        disabled={false}
        valueLabelDisplay="off"
        onChangeCommitted={(e, val) => props.setDiscCount(val)}
      />
    </div>
  );
};

export default CountSlider;
