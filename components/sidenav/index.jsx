import React from "react";
import SideNavBrand from "./components/brand";
import SideNavButtons from "./components/buttons";
import SideNavLinks from "./components/links";
import Styles from "./style.module.css";

const SideNav = () => {
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
