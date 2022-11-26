import { batch } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Seo from "/components/Seo";
import { ToProperCase } from "/utils";
import Footer from "/components/Footer";
import { setIsRunning } from "/redux/reducers/hanoiSlice";
import AlgoData from "/components/AlgoPage/TowerOfHanoi/AlgoData";
import {
  setAlgoId,
  setAlgoName,
  setAlgoCategory,
} from "/redux/reducers/pageSlice";
import StatsContainer from "/components/AlgoPage/TowerOfHanoi/Stats";
import HanoiControllers from "/components/AlgoPage/TowerOfHanoi/Controllers";
import VisualizerContainer from "/components/AlgoPage/TowerOfHanoi/Visualizer";
import { generateDiscs } from "/components/AlgoPage/TowerOfHanoi/HanoiUtils/generateDiscs";

export default function TowerOfHanoi() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsRunning(false));
    var rawAlgoId = "tower-of-hanoi";
    var algoName = ToProperCase(rawAlgoId);
    generateDiscs();

    if (algoName != undefined) {
      batch(() => {
        dispatch(setAlgoId(rawAlgoId));
        dispatch(setAlgoName(algoName));
        dispatch(setAlgoCategory("recursion"));
      });
    }
  });
  return (
    <div>
      <Seo category="recursion" id="tower-of-hanoi" />
      <div className="px-gapm">
        <HanoiControllers />
        <VisualizerContainer />
        <StatsContainer />
        <AlgoData />
        <Footer />
      </div>
    </div>
  );
}
