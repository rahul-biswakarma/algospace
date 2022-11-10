import Image from "next/image";
import { useEffect } from "react";
import { batch } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import {
  setAlgoId,
  setAlgoName,
  setAlgoCategory,
} from "/redux/reducers/pageSlice";
import Seo from "/components/Seo";
import { ToProperCase } from "/utils";
import Footer from "/components/Footer";
import StatsContainer from "/components/AlgoPage/Searching/Stats";
import { setIsSearching, resetStats } from "/redux/reducers/searchingSlice";
import VisualizerContainer from "/components/AlgoPage/Searching/Visualizer";
import SearchingControllers from "/components/AlgoPage/Searching/Controllers";
import VisualizerEdgeLeftIcon from "/public/assets/visualizer-edge-left-icon.svg";
import VisualizerEdgeRightIcon from "/public/assets/visualizer-edge-right-icon.svg";

import { generateNewArray } from "/components/AlgoPage/Searching/SearchingUtils/generateArray";

import AlgoData from "/components/AlgoPage/Searching/AlgoData";

export default function Searching() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(setIsSearching(false));
      dispatch(resetStats());
    });
    var rawAlgoId = router.query.algoid;
    var algoName = ToProperCase(rawAlgoId);

    if (algoName != undefined) {
      batch(() => {
        dispatch(setAlgoId(rawAlgoId));
        dispatch(setAlgoName(algoName));
        dispatch(setAlgoCategory("searching"));
        generateNewArray();
      });
    }
  });

  return (
    <div>
      <Seo category="searching" id={router.query.algoid} />
      <div className="px-gap">
        <SearchingControllers />
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
        <AlgoData />
        <Footer />
      </div>
    </div>
  );
}
