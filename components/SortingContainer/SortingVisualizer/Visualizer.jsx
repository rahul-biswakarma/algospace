import React, { useEffect } from "react";
import SortingAlgoStats from "./AlgoStats";
import HeightLevelMarker from "./HeightLevelMarker";
import AlgoOptionsHeader from "./AlgoOptionsHeader";
import AlgoCodeVisualizer from "./AlgoCodeVisualizer";
import Styles from "../../../styles/sorting/SortingVisualizer.module.css";

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
      <AlgoCodeVisualizer Styles={Styles} algoCode={props.code} />
      <div className={Styles.BlogContainer} id="sorting-text"></div>
    </div>
  );
};

export default SortingVisualizer;
