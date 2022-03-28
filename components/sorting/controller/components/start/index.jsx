import { Play } from "react-feather";

const StartButon = (props) => {
  return (
    <button
      className={props.Styles.startSortingAlgo}
      id="startSortingAlgo"
      onClick={props.startAlgo}
    >
      <Play className={props.Styles.buttonIcons} />
      Start
    </button>
  );
};

export default StartButon;
