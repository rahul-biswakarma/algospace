import { Play, Pause } from "react-feather";

const StartButon = (props) => {
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
        className={props.Styles.stopSortingAlgo}
        id={props.stopId}
        onClick=""
      >
        <Pause className={props.Styles.stopButtonIcons} />
        Stop
      </button>
    </div>
  );
};

export default StartButon;
