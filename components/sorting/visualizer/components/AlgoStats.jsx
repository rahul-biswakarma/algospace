import React from "react";

const SortingAlgoStats = (props) => {
  return (
    <>
      <div
        className={`${props.Styles.SortingTerminalC} noselect`}
        id="algoStatsDivId"
      >
        <div id="sortingTerminal" className={props.Styles.SortingTerminal}>
          <div className={props.Styles.ColorText}>
            <span className={props.Styles.ColorPurple}>Array</span>
            <span
              id="arrayElementC"
              className={`${props.Styles.ColorBlue} ${props.Styles.FlexWrap}`}
            ></span>
          </div>
          <div className={props.Styles.ColorText}>
            <span className={`${props.Styles.ColorPurple} noselect`}>
              Total Elements
            </span>{" "}
            ={" "}
            <span
              id="totalElementsInArray"
              className={`${props.Styles.ColorBlue} noselect`}
            ></span>
          </div>
          <div className={props.Styles.ColorText}>
            <span className={`${props.Styles.ColorPurple} noselect`}>
              Total Comparisons
            </span>{" "}
            ={" "}
            <span
              id="comparisonValueC"
              className={`${props.Styles.ColorBlue} noselect`}
            >
              0
            </span>
          </div>
          <div className={props.Styles.ColorText}>
            <span className={`${props.Styles.ColorPurple} noselect`}>
              Total Swaps Done
            </span>{" "}
            ={" "}
            <span
              id="swapValueC"
              className={`${props.Styles.ColorBlue} noselect`}
            >
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingAlgoStats;
