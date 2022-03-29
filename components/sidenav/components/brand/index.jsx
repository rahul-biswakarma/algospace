import { useEffect } from "react";
import Styles from "./style.module.css";
import ParallexStar from "../../../../utils/ParallexStar";

const SideNavBrand = () => {
  useEffect(() => {
    ParallexStar();
  }, []);
  return (
    <div className={Styles.Container}>
      <canvas className={Styles.Canvas} id="canvas"></canvas>
      <h1 className={Styles.sideNavBrandTitle}>
        <span className={Styles.blueText}>Algo</span> Space
      </h1>
      <div className={Styles.version}>version 0.32</div>
    </div>
  );
};

export default SideNavBrand;
