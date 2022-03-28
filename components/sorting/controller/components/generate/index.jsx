import React from "react";
import { Grid } from "react-feather";

const GenerateButton = (props) => {
  return (
    <button
      id="generatArrayButton"
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
