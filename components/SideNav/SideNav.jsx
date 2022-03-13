import React from "react";
import SideNavBrand from "./SideNavBrand";
import SideNavButtons from "./SideNavButtons";
import SideNavLinks from "./SideNavLinks";
import Styles from "../../styles/side-nav/SideNav.module.css";

const SideNav = (props) => {
  return (
    <div className={Styles.Container}>
      <SideNavBrand />
      <div className={Styles.ChildContainer}>
        <SideNavLinks />
        <SideNavButtons />
      </div>
    </div>
  );
};

export default SideNav;
