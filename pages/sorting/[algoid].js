import React from "react";
import Head from "next/head";
import { batch } from "react-redux";
import { ToProperCase } from "/utils";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "/components/Footer";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setArray } from "/redux/reducers/sortingSlice";
import StatsContainer from "/components/AlgoPage/Sorting/Stats";
import { generateNewArray } from "/components/AlgoPage/Sorting/SortingUtils/generateArray";
import { setAlgoName, setAlgoId } from "/redux/reducers/pageSlice";
import SortingControllers from "/components/AlgoPage/Sorting/Controllers";
import VisualizerContainer from "/components/AlgoPage/Sorting/Visulaizer";

import VisualizerEdgeLeftIcon from "/public/assets/visualizer-edge-left-icon.svg";
import VisualizerEdgeRightIcon from "/public/assets/visualizer-edge-right-icon.svg";

const Sorting = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  let barWidth = useSelector((state) => state.sorting.barWidth);

  useEffect(() => {
    var rawAlgoId = router.query.algoid;
    var algoName = ToProperCase(rawAlgoId);

    if (algoName != undefined) {
      batch(() => {
        dispatch(setAlgoId(rawAlgoId));
        dispatch(setAlgoName(algoName));
        generateNewArray();
      });
    }
  });

  return (
    <div>
      <Head>
        <title>{useSelector((state) => state.page.algoName)} | AlgoSpace</title>
      </Head>
      <div className="px-gap">
        <SortingControllers />
        <VisualizerContainer />
        <div className="flex justify-between mt-[-12px]">
          <Image
            className="scale-[0.8]"
            src={VisualizerEdgeLeftIcon}
            alt="icon"
          />
          <Image
            className="scale-[0.8]"
            src={VisualizerEdgeRightIcon}
            alt="icon"
          />
        </div>
        <StatsContainer />
        {/* <AlgoDataContainer algoName={algoName} /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Sorting;
