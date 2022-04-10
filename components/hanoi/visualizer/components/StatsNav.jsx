import { Tooltip, Grow } from "@mui/material";
import { BarChart2, FileText } from "react-feather";

const StatsNav = (props) => {
  return (
    <div className={props.Styles.OptionsHeaderC}>
      <div className={props.Styles.OptionHeaderTitle} id="optionHeaderTitle">
        Stats
      </div>
      <Tooltip title="View Algo Stats" TransitionComponent={Grow}>
        <div className={`${props.Styles.OptionHeaderIconsC}`}>
          <BarChart2
            className="opionHeaderIcon activeBlue"
            id="statsAlgoOptionsIcon"
          />
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

export default StatsNav;
