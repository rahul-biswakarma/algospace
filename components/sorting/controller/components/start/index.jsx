import { Play, Pause } from "react-feather";
import updateFunctionStatus from "/utils/UpdateFunctionStatus";

const StartButton = (props) => {
  return (
    <div className={props.startStopC}>
      <button
        className={props.Styles.startSortingAlgo}
        id={props.id}
        onClick={props.startAlgo}
      >
        <Play className={props.Styles.buttonIcons} />
        Start
      </button>

      <button
        onClick={() => {
          updateFunctionStatus(0);
        }}
        className={props.Styles.stopSortingAlgo}
        id={props.stopId}
      >
        <Pause className={props.Styles.stopButtonIcons} />
        Stop
      </button>
    </div>
  );
};

export default StartButton;
