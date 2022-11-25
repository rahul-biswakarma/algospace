import Image from "next/image";
import { useEffect } from "react";
import { batch } from "react-redux";
import { useRouter } from "next/router";

import Seo from "/components/Seo";
import { ToProperCase } from "/utils";
import Footer from "/components/Footer";
import {
  setAlgoId,
  setAlgoName,
  setAlgoCategory,
} from "/redux/reducers/pageSlice";
import { useDispatch } from "react-redux";
import AlgoData from "/components/AlgoPage/Sorting/AlgoData";
import StatsContainer from "/components/AlgoPage/Sorting/Stats";
import { setRunning, resetStats } from "/redux/reducers/sortingSlice";
import VisualizerContainer from "/components/AlgoPage/Sorting/Visualizer";
import SortingControllers from "/components/AlgoPage/Sorting/Controllers";
import VisualizerEdgeLeftIcon from "/public/assets/visualizer-edge-left-icon.svg";
import VisualizerEdgeRightIcon from "/public/assets/visualizer-edge-right-icon.svg";
import { generateNewArray } from "/components/AlgoPage/Sorting/SortingUtils/generateArray";

export default function Sorting() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(setRunning(false));
      dispatch(resetStats());
    });
    var rawAlgoId = router.query.algoid;
    var algoName = ToProperCase(rawAlgoId);

    if (algoName != undefined) {
      batch(() => {
        dispatch(setAlgoId(rawAlgoId));
        dispatch(setAlgoName(algoName));
        dispatch(setAlgoCategory("sorting"));
        generateNewArray();
      });
    }
  });

  return (
    <div>
      <Seo category="sorting" id={router.query.algoid} />
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
        <AlgoData />
        <Footer />
      </div>
    </div>
  );
}
