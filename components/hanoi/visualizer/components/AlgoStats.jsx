import React from "react";

const HanoiAlgoStats = (props) => {
  return (
    <>
      <div className={props.Styles.SortingTerminalC} id="algoStatsDivId">
        <div id="sortingTerminal" className={props.Styles.SortingTerminal}>
          <div className={props.Styles.ColorText}>
            <span className={props.Styles.ColorPurple}>
              Total Disc Transfers
            </span>
            ={" "}
            <span id="totalSwap" className={props.Styles.ColorBlue}>
              0
            </span>
          </div>
          <div className={props.Styles.ColorText}>
            <span className={props.Styles.ColorPurple}>
              <b>A</b> to <b>B</b> transfers
            </span>{" "}
            ={" "}
            <span id="swapValueAB" className={props.Styles.ColorBlue}>
              0
            </span>
          </div>
          <div className={props.Styles.ColorText}>
            <span className={props.Styles.ColorPurple}>
              <b>A</b> to <b>C</b> transfers
            </span>{" "}
            ={" "}
            <span id="swapValueAC" className={props.Styles.ColorBlue}>
              0
            </span>
          </div>
          <div className={props.Styles.ColorText}>
            <span className={props.Styles.ColorPurple}>
              <b>B</b> to <b>C</b> transfers
            </span>{" "}
            ={" "}
            <span id="swapValueBC" className={props.Styles.ColorBlue}>
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HanoiAlgoStats;
