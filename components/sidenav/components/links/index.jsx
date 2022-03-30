import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Styles from "./style.module.css";
import Collapsible from "react-collapsible";
import algorithms from "/data/Algorithms.json";
import singleAlgorithms from "/data/SingleAlgorithms.json";

const SideNavLinks = () => {
  return (
    <div className={Styles.Container}>
      {algorithms.map((data) => {
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
      {singleAlgorithms.map((algorithm) => {
        return (
          <Link key={algorithm.id} href={"/" + algorithm.id}>
            <a className={Styles.singleAlgoLinks}>{algorithm.name}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavLinks;
