import Head from "next/head";
import { setRecoil } from "recoil-nexus";
import { algoIdAtom } from "/recoil/atoms/algoIdAtom";
import HomeVisualizer from "/components/Home/Visualizer";

const Home = () => {
  setRecoil(algoIdAtom, "Home");
  return (
    <>
      <Head>
        <title>AlgoSpace</title>
      </Head>
      <div className="p-gap">
        <HomeVisualizer />
      </div>
    </>
  );
};

export default Home;
