import { useState } from "react";
import { motion } from "framer-motion";
import Styles from "./styles.module.css";
import TowerOfHanoiController from "./controller";
import TowerOfHanoiVisualizer from "./visualizer";

const TowerOfHanoi = () => {
  const [discCount, setDiscCount] = useState(4);
  const [sortingDelay, setSortingDelay] = useState(300);

  return (
    <motion.div
      initial={{ y: "-15%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ ease: "easeOut" }}
      className={Styles.Container}
    >
      <TowerOfHanoiController
        sortingDelay={sortingDelay}
        discCount={discCount}
        setSortingDelay={setSortingDelay}
        setDiscCount={setDiscCount}
      />
      <TowerOfHanoiVisualizer />
    </motion.div>
  );
};

export default TowerOfHanoi;
