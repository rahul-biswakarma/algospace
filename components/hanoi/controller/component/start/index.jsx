import { Play, Pause } from "react-feather";

const StartButton = (props) => {
  return (
    <div className={props.Styles.startStopC}>
      <button
        onClick={props.startToh}
        className={props.Styles.startSortingAlgo}
        id={props.id}
      >
        <Play className={props.Styles.buttonIcons} />
        Start
      </button>
      <button className={props.Styles.stopSortingAlgo} id={props.stopId}>
        <Pause className={props.Styles.stopButtonIcons} />
        Stop
      </button>
    </div>
  );
};

export default StartButton;
