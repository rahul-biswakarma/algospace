import Head from "next/head";
import Styles from "/styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>AlgoSpace</title>
      </Head>
      <div className={Styles.Container}>
        <div className={Styles.RightContainer}>
          <div className={Styles.Header}>
            <h1 className={Styles.BrandTitle}>
              <span className={Styles.blueText}>Algo</span> Space
            </h1>
            <div className={Styles.version}>version 0.32</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
