import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Styles from "../../styles/sorting/Sorting.module.css";
import Sorting from "../../components/SortingContainer/Sorting";

export async function GetServerSideProps(context) {
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
      />
    </>
  );
}

export default SortingMain;
