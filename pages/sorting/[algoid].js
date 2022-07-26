import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { setRecoil } from "recoil-nexus";
import ToProperCase from "/utils/toProperCase";
import { algoIdAtom } from "/recoil/atoms/algoIdAtom";
import SortingControllers from "/components/AlgoPage/Sorting/Controllers";
import VisualizerContainer from "/components/AlgoPage/Sorting/Visulaizer";
import { generateNewArray } from "/components/AlgoPage/Sorting/Utils/generateArray";

const Sorting = () => {
  const router = useRouter();
  var rawAlgoId = router.query.algoid;
  setRecoil(algoIdAtom, rawAlgoId);

  useEffect(() => {
    generateNewArray(20);
  }, []);

  return (
    <div>
      <Head>
        <title>{ToProperCase(rawAlgoId)} | AlgoSpace</title>
      </Head>
      <SortingControllers />
      <VisualizerContainer />
    </div>
  );
};

export default Sorting;
