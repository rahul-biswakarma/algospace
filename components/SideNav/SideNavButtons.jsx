import React from "react";
import Link from "next/link";
import { Tooltip, Grow } from "@mui/material";
import { Star, GitHub, Settings, Sun, User } from "react-feather";
import Styles from "../../styles/side-nav/SideNavButtons.module.css";

function SideNavButtons() {
  return (
    <div className={Styles.Container}>
      <Tooltip
        title="Star on GitHub ⭐"
        TransitionComponent={Grow}
        followCursor
      >
        <div className={Styles.IconContainer}>
          <Star className={Styles.Icons} />
        </div>
      </Tooltip>
      <Tooltip title="GitHub Repo Link" TransitionComponent={Grow} followCursor>
        <div className={Styles.IconContainer}>
          <a
            className={Styles.IconLink}
            href="https://github.com/id39r/algo-visualizer"
            targe="_blank"
          >
            <GitHub className={Styles.Icons} />
          </a>
        </div>
      </Tooltip>
      <Tooltip title="About Developer" TransitionComponent={Grow} followCursor>
        <div className={Styles.IconContainer}>
          <User className={Styles.Icons} />
        </div>
      </Tooltip>
      {/* <div className={Styles.IconContainer}>
        <Settings className={Styles.Icons} />
      </div>
      <div className={Styles.IconContainer + " " + Styles.LastIconContainer}>
        <Sun className={Styles.Icons} />
      </div> */}
    </div>
  );
}

export default SideNavButtons;
