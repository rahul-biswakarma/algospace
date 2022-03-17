import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Styles from "../../styles/sorting/Sorting.module.css";
import Sorting from "../../components/SortingContainer/Sorting";

export async function getServerSideProps(context) {
  var fileName = context.params.id;
  var data = require(`/data/sorting/${fileName}.json`);

  return {
    props: { data },
  };
}

function SortingMain({ data }) {
  var title = data.title;
  const router = useRouter();
  var { id } = router.query;

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
