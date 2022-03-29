import Head from "next/head";
import Sorting from "../../components/sorting";
import Styles from "../../styles/Sorting.module.css";

export async function getServerSideProps(context) {
  var fileName = context.params.algo;
  var data = require(`/data/sorting/${fileName}.json`);
  return {
    props: { data },
  };
}

function SortingMain({ data }) {
  var title = data.title;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Sorting
        className={Styles.RightContainer}
        funcName={data.funcName}
        htmlContent={data.html}
        code={data.code}
      />
    </>
  );
}

export default SortingMain;
