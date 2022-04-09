import { Grid } from "react-feather";
import { GenerateDisc } from "/utils/TowerOfHanoi/TohUtils";

const GenerateDiscButton = (props) => {
  return (
    <button
      id={props.id}
      onClick={() => {
        GenerateDisc(props.discCount);
      }}
    >
      <Grid className={props.Styles.buttonIcons} />
      Generate Disc
    </button>
  );
};

export default GenerateDiscButton;
