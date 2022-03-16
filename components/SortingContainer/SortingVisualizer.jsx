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
      <div className={Styles.Container} id="sorting-array-c"></div>
      <div className={Styles.SortingTerminalC}>
        <div className={Styles.TerminalHeading}>Stats</div>
        <div id="sortingTerminal" className={Styles.SortingTerminal}>
          <div className={Styles.ColorText}>
            <span className={Styles.ColorPurple}>Array</span> ={" "}
            <span className={Styles.ColorOrange}>[</span>{" "}
            <span
              id="arrayElementC"
              className={`${Styles.ColorBlue} ${Styles.FlexWrap}`}
            ></span>
            <span className={Styles.ColorOrange}>]</span>
          </div>
          <div className={Styles.ColorText}>
            <span className={Styles.ColorPurple}>Total Elements</span> ={" "}
            <span id="totalElementsInArray" className={Styles.ColorBlue}></span>
          </div>
          <div className={Styles.ColorText}>
            <span className={Styles.ColorPurple}>Total Comparisons</span> ={" "}
            <span id="comparisonValueC" className={Styles.ColorBlue}>
              _
            </span>
          </div>
          <div className={Styles.ColorText}>
            <span className={Styles.ColorPurple}>Total Swaps Done</span> ={" "}
            <span id="swapValueC" className={Styles.ColorBlue}>
              _
            </span>
          </div>
        </div>
      </div>
      <div className={Styles.BlogContainer} id="sorting-text"></div>
    </div>
  );
};

export default SortingVisualizer;
