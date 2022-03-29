import React, { useEffect } from "react";
import Styles from "./styles.module.css";
import StatsNav from "./components/StatsNav";
import SortingAlgoStats from "./components/AlgoStats";
import HeightLevelMarker from "./components/HeightLevelMarker";

const SortingVisualizer = (props) => {
  useEffect(() => {
    try {
      document.getElementById("sorting-text").innerHTML = props.htmlContent;
    } catch {}
  }, []);

  return (
    <div className={Styles.MainC}>
      <HeightLevelMarker Styles={Styles} />
      <div className={Styles.Container} id="sorting-array-c"></div>
      <StatsNav Styles={Styles} />
      <SortingAlgoStats
        className="algoOptionDivs showOptionDivs"
        Styles={Styles}
      />
      <div className={Styles.BlogContainer} id="sorting-text"></div>
    </div>
  );
};

export default SortingVisualizer;
