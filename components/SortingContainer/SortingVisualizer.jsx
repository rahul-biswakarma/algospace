import React, { useEffect } from "react";
import Styles from "../../styles/sorting/SortingVisualizer.module.css";

const SortingVisualizer = (props) => {
  useEffect(() => {
    document.getElementById("sorting-text").innerHTML = props.htmlContent;
  }, []);

  return (
    <div className={Styles.MainC}>
      <div id="heightMarkingC" className={Styles.HeightMarkingContainer}>
        <div className={Styles.HeightMarker}></div>
        <div className={Styles.HeightMarker}></div>
        <div className={Styles.HeightMarker}></div>
      </div>
      <div
        className={Styles.Container}
        id="sorting-array-c"
        data-stop="0"
      ></div>
      <div className={Styles.BlogContainer} id="sorting-text"></div>
    </div>
  );
};

export default SortingVisualizer;
