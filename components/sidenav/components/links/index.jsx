import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Styles from "./style.module.css";
import Collapsible from "react-collapsible";

const SideNavLinks = (algos) => {
  console.log(algos);
  return (
    <div className={Styles.Container}>
      {/* {algos.map((data) => {
        return (
          <Collapsible
            key={uuidv4()}
            instanceId={data.instanceId}
            inputId={data.instanceId}
            trigger={data.name}
            aria-expanded={true}
            className={Styles.CollapsibleTrigger}
          >
            {data.algorithms.map((algorithm) => {
              return (
                <Link
                  key={algorithm.id}
                  href={"/" + data.id + "/" + algorithm.id}
                  className={Styles.CollapsibelItems}
                >
                  <a>{algorithm.name}</a>
                </Link>
              );
            })}
          </Collapsible>
        );
      })}
      {singleAlgos.map((algorithm) => {
        return (
          <Link key={algorithm.id} href={"/" + algorithm.id}>
            <a className={Styles.singleAlgoLinks}>{algorithm.name}</a>
          </Link>
        );
      })} */}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("/api/algorithms");
  const algos = await res.json();

  const res2 = await fetch("/api/single-algorithms");
  const singleAlgos = await res2.json();
  return { props: { algos } };
}

export default SideNavLinks;
