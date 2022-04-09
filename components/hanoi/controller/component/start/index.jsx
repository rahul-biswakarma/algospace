import { Play } from "react-feather";

const StartButton = (props) => {
  return (
    <button
      onClick={props.startToh}
      className={props.Styles.startSortingAlgo}
      id={props.id}
    >
      <Play className={props.Styles.buttonIcons} />
      Start
    </button>
  );
};

export default StartButton;
