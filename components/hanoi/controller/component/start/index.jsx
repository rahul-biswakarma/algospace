import { Play } from "react-feather";

const StartButton = (props) => {
  return (
    <button
      onClick={props.startToh}
      className={props.Styles.startSortingAlgo}
      id="startSortingAlgo"
    >
      <Play className={props.Styles.buttonIcons} />
      Start
    </button>
  );
};

export default StartButton;
