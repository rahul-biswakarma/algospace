import React, { useEffect } from "react";
import SortingAlgoStats from "./components/AlgoStats";
import HeightLevelMarker from "./components/HeightLevelMarker";
import AlgoOptionsHeader from "./components/AlgoOptionsHeader";
import AlgoCodeVisualizer from "./components/AlgoCodeVisualizer";
import Styles from "./styles.module.css";

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
      <AlgoOptionsHeader Styles={Styles} />
      <SortingAlgoStats
        className="algoOptionDivs showOptionDivs"
        Styles={Styles}
      />
      <div className={Styles.BlogContainer} id="sorting-text"></div>
    </div>
  );
};

export default SortingVisualizer;
