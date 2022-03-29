import React from "react";
import Styles from "./styles.module.css";

const TowerOfHanoiVisualizer = () => {
  return (
    <div className={Styles.TohVisualizerC}>
      <div id="tohTower1" className={Styles.TowerC}></div>
      <div id="tohTower2" className={Styles.TowerC}></div>
      <div id="tohTower3" className={Styles.TowerC}></div>
    </div>
  );
};

export default TowerOfHanoiVisualizer;
