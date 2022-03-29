import Styles from "./style.module.css";
import SideNavLinks from "./components/links";
import SideNavBrand from "./components/brand";
import SideNavButtons from "./components/buttons";

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
