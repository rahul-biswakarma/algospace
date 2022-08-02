import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { setRecoil } from "recoil-nexus";
import ToProperCase from "/utils/toProperCase";
import { algoIdAtom } from "/recoil/atoms/algoIdAtom";
import SortingControllers from "/components/AlgoPage/Sorting/Controllers";
import VisualizerContainer from "/components/AlgoPage/Sorting/Visulaizer";
import VisualizerEdgeLeftIcon from "/public/assets/visualizer-edge-left-icon.svg";
import VisualizerEdgeRightIcon from "/public/assets/visualizer-edge-right-icon.svg";
import { generateNewArray } from "/components/AlgoPage/Sorting/Utils/generateArray";

const Sorting = () => {
  const router = useRouter();
  var rawAlgoId = router.query.algoid;
  var algoName = ToProperCase(rawAlgoId);
  setRecoil(algoIdAtom, rawAlgoId);

  useEffect(() => {
    generateNewArray();
  }, []);

  return (
    <div>
      <Head>
        <title>{algoName} | AlgoSpace</title>
      </Head>
      <div className="px-gap">
        <SortingControllers />
        <VisualizerContainer />
        <div className="flex justify-between mt-[-12px]">
          <Image src={VisualizerEdgeLeftIcon} alt="icon" />
          <Image src={VisualizerEdgeRightIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sorting;
