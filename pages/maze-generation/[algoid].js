import React from "react";
import { batch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Seo from "/components/Seo";
import Footer from "/components/Footer";
import { ToProperCase } from "/utils";
import {
  setAlgoId,
  setAlgoName,
  setAlgoCategory,
} from "/redux/reducers/pageSlice";
import AlgoData from "/components/AlgoPage/MazeGeneration/AlgoData";
import StatsContainer from "/components/AlgoPage/MazeGeneration/Stats";
import VisualizerContainer from "/components/AlgoPage/MazeGeneration/Visualizer";
import generateGrid from "/components/AlgoPage/MazeGeneration/MazeUtils/generateGrid";
import MazeGenerationControllers from "/components/AlgoPage/MazeGeneration/Controllers";

export default function Sorting() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    var rawAlgoId = router.query.algoid;
    var algoName = ToProperCase(rawAlgoId);

    if (algoName != undefined) {
      batch(() => {
        dispatch(setAlgoId(rawAlgoId));
        dispatch(setAlgoName(algoName));
        dispatch(setAlgoCategory("maze-generation"));
      });
    }
    generateGrid();
  });

  return (
    <div>
      <Seo category="maze-generation" id={router.query.algoid} />
      <div className="px-gap">
        <MazeGenerationControllers />
        <VisualizerContainer />
        <StatsContainer />
        <AlgoData />
        <Footer />
      </div>
    </div>
  );
}
