import { motion } from "framer-motion";
import Styles from "./style.module.css";
import SideNavLinks from "./components/links";
import SideNavBrand from "./components/brand";
import SideNavButtons from "./components/buttons";

const SideNav = () => {
  return (
    <motion.div
      initial={{ x: "-50%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ ease: "easeOut" }}
      className={Styles.Container}
    >
      <SideNavBrand />
      <div className={Styles.ChildContainer}>
        <SideNavLinks />
        <SideNavButtons />
      </div>
    </motion.div>
  );
};

export default SideNav;
