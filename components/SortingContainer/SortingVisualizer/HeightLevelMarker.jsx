import React from "react";

const HeightLevelMarker = (props) => {
  return (
    <>
      <div id="heightMarkingC" className={props.Styles.HeightMarkingContainer}>
        <div className={props.Styles.HeightMarker}></div>
        <div className={props.Styles.HeightMarker}></div>
        <div className={props.Styles.HeightMarker}></div>
      </div>
    </>
  );
};

export default HeightLevelMarker;
