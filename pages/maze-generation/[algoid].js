import Head from "next/head";
import Image from "next/image";
import React from "react";
import { batch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

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
import MazeGenerationControllers from "/components/AlgoPage/MazeGeneration/Controllers";
import generateCellCount from "/components/AlgoPage/MazeGeneration/MazeUtils/generateCellCount";

const Sorting = () => {
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
    generateCellCount();
  });

  return (
    <div>
      <Head>
        <title>{useSelector((state) => state.page.algoName)} | AlgoSpace</title>
      </Head>
      <div className="px-gap">
        <MazeGenerationControllers />
        <VisualizerContainer />
        <StatsContainer />
        <AlgoData />
        <Footer />
      </div>
    </div>
  );
};

export default Sorting;
