import { useState } from "react";
import Styles from "./styles.module.css";
import TowerOfHanoiController from "./controller";
import TowerOfHanoiVisualizer from "./visualizer";

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
