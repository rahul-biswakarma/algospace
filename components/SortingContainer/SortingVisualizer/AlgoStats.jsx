import React from "react";

const SortingAlgoStats = (props) => {
  return (
    <>
      <div className={props.Styles.SortingTerminalC} id="algoStatsDivId">
        <div id="sortingTerminal" className={props.Styles.SortingTerminal}>
          <div className={props.Styles.ColorText}>
            <span className={props.Styles.ColorPurple}>Array</span> ={" "}
            <span className={props.Styles.ColorOrange}>[</span>{" "}
            <span
              id="arrayElementC"
              className={`${props.Styles.ColorBlue} ${props.Styles.FlexWrap}`}
            ></span>
            <span className={props.Styles.ColorOrange}>]</span>
          </div>
          <div className={props.Styles.ColorText}>
            <span className={props.Styles.ColorPurple}>Total Elements</span> ={" "}
            <span
              id="totalElementsInArray"
              className={props.Styles.ColorBlue}
            ></span>
          </div>
          <div className={props.Styles.ColorText}>
            <span className={props.Styles.ColorPurple}>Total Comparisons</span>{" "}
            ={" "}
            <span id="comparisonValueC" className={props.Styles.ColorBlue}>
              0
            </span>
          </div>
          <div className={props.Styles.ColorText}>
            <span className={props.Styles.ColorPurple}>Total Swaps Done</span> ={" "}
            <span id="swapValueC" className={props.Styles.ColorBlue}>
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingAlgoStats;
