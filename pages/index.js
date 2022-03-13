import React, { useEffect } from "react";
import Head from "next/head";
import SideNav from "../components/SideNav/SideNav";
import Styles from "../styles/Home.module.css";

const Home = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("DarkUI");
  });

  return (
    <>
      <Head>
        <title>AlgoSpace</title>
      </Head>
      <div className={Styles.Container}>
        <div className={Styles.RightContainer}></div>
      </div>
    </>
  );
};

export default Home;
