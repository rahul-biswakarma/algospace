import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import ToProperCase from "/utils/toProperCase";
import { algoIdAtom } from "/recoil/atoms/algoIdAtom";
import SortingControllers from "/components/AlgoPage/Sorting/Controllers";
import VisualizerContainer from "/components/AlgoPage/Sorting/Visulaizer";
import { generateNewArray } from "/components/AlgoPage/Sorting/Utils/GenerateArray";

const Sorting = () => {
  const router = useRouter();
  let rawAlgoId = router.query.algoid;
  const [, setAlgoId] = useRecoilState(algoIdAtom);
  setAlgoId(rawAlgoId);

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
