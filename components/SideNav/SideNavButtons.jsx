import React from "react";
import Styles from "../../styles/side-nav/SideNavButtons.module.css";
import { Star, GitHub, Settings, Sun, User } from "react-feather";

function SideNavButtons() {
  return (
    <div className={Styles.Container}>
      <div className={Styles.IconContainer}>
        <Star className={Styles.Icons} />
      </div>
      <div className={Styles.IconContainer}>
        <GitHub className={Styles.Icons} />
      </div>
      <div className={Styles.IconContainer}>
        <User className={Styles.Icons} />
      </div>
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
