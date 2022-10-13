import React, { useEffect } from "react";
import Head from "next/head";
import TopBar from "/components/TopBar";
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
        <div className="relative w-full h-[70vh] border-[1px] border-border-1 bg-graphPattern">
          <TopBar />
          <div
            id="visualizer-container"
            className="flex justify-center items-end pb-[2rem] flex-row h-full w-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
