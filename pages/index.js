import Head from "next/head";
import React, { useEffect } from "react";

import TopBar from "/components/TopBar";
import Terrain from "/components/Terrain";
import { batch, useDispatch } from "react-redux";
import {
  setAlgoId,
  setAlgoName,
  setAlgoCategory,
} from "/redux/reducers/pageSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    batch(() => {
      dispatch(setAlgoId("home"));
      dispatch(setAlgoName("Home"));
      dispatch(setAlgoCategory("home"));
    });
  });
  return (
    <div>
      <Head>
        <title>Home | AlgoSpace</title>
      </Head>
      <div className="p-gap">
        <div className="relative w-[100%] h-[70vh] border-[1px] border-border-1 overflow-hidden">
          <TopBar />
          <div
            id="visualizer-container"
            className="relative h-full overflow-hidden"
          >
            <Terrain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
