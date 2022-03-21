import React, { useState } from "react";
import TowerOfHanoiController from "./Controller";
import TowerOfHanoiVisualizer from "./Visualizer";
import Styles from "../../styles/tower-of-hanoi/TowerOfHanoi.module.css";

const TowerOfHanoi = () => {
  const [discCount, setDiscCount] = useState(4);
  const [sortingDelay, setSortingDelay] = useState(300);
  return (
    <div className={Styles.Container}>
      <TowerOfHanoiController
        sortingDelay={sortingDelay}
        discCount={discCount}
        setSortingDelay={setSortingDelay}
        setDiscCount={setDiscCount}
      />
      <TowerOfHanoiVisualizer />
    </div>
  );
};

export default TowerOfHanoi;
