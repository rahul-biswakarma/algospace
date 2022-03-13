import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Collapsible from "react-collapsible";
import algorithms from "../../data/algorithms.json";
import Styles from "../../styles/side-nav/SideNavLinks.module.css";

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
    </div>
  );
};

export default SideNavLinks;
