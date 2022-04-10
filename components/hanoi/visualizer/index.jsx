import Styles from "./styles.module.css";
import StatsNav from "./components/StatsNav";
import SortingAlgoStats from "./components/AlgoStats";

const TowerOfHanoiVisualizer = () => {
  return (
    <>
      <div style={{ marginBottom: "50px" }} className={Styles.TohVisualizerC}>
        <div id="tohTower1" className={Styles.TowerC}></div>
        <div id="tohTower2" className={Styles.TowerC}></div>
        <div id="tohTower3" className={Styles.TowerC}></div>
      </div>
      <StatsNav Styles={Styles} />
      <SortingAlgoStats
        className="algoOptionDivs showOptionDivs"
        Styles={Styles}
      />
    </>
  );
};

export default TowerOfHanoiVisualizer;
