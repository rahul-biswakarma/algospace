import React from "react";
import { Grid } from "react-feather";
import { GenerateArray } from "/utils/Sorting/SortingUtils";

const GenerateButton = (props) => {
  return (
    <button
      id={props.id}
      onClick={() => {
        GenerateArray(props.elementWidth);
      }}
    >
      <Grid className={props.Styles.buttonIcons} />
      Generate Array
    </button>
  );
};

export default GenerateButton;
