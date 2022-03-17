import { Tooltip, Grow } from "@mui/material";
import React from "react";
import ChangeAlgoOptions from "../../../utils/ChangeAlgoOptions";
import { BarChart2, Code, FileText } from "react-feather";

const AlgoOptionsHeader = (props) => {
  return (
    <div className={props.Styles.OptionsHeaderC}>
      <div className={props.Styles.OptionHeaderTitle} id="optionHeaderTitle">
        Stats
      </div>
      <Tooltip title="View Algo Stats" TransitionComponent={Grow}>
        <div
          className={`${props.Styles.OptionHeaderIconsC}`}
          onClick={() => {
            if (document.readyState == "complete") {
              ChangeAlgoOptions(
                "Stat",
                "codeAlgoOptionsIcon",
                "algoCodeVisualzierId",
                "statsAlgoOptionsIcon",
                "algoStatsDivId"
              );
            }
          }}
        >
          <BarChart2
            className="opionHeaderIcon activeBlue"
            id="statsAlgoOptionsIcon"
          />
        </div>
      </Tooltip>
      <Tooltip title="View Code Execution" TransitionComponent={Grow}>
        <div
          className={`${props.Styles.OptionHeaderIconsC}`}
          onClick={() => {
            if (document.readyState == "complete") {
              ChangeAlgoOptions(
                "Algo Code",
                "statsAlgoOptionsIcon",
                "algoStatsDivId",
                "codeAlgoOptionsIcon",
                "algoCodeVisualzierId"
              );
            }
          }}
        >
          <Code className="opionHeaderIcon" id="codeAlgoOptionsIcon" />
        </div>
      </Tooltip>
      <Tooltip title="Read Blog" TransitionComponent={Grow}>
        <a href="#sorting-text">
          <div className={`${props.Styles.OptionHeaderIconsC} opionHeaderIcon`}>
            <FileText />
          </div>
        </a>
      </Tooltip>
    </div>
  );
};

export default AlgoOptionsHeader;
