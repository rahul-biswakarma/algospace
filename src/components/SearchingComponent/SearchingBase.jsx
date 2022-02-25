import React, { useEffect, useState } from "react";
import SearchTopBar from "./SearchTopBar";
import "./SearchingBase.css";
import { MoreHorizontal } from "react-feather";

const SearchingBase = (props) => {
  const [height, setHeight] = useState("49%");
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    let sideBar = document.getElementById("search-side-bar");
    sideBar.style.gridTemplateRows = height + " 8px auto";
  }, [height]);

  return (
    <div className="search-visualizer-main-c">
      <div
        className="search-side-bar"
        id="search-side-bar"
        onMouseDown={() => {
          setDragging(true);
        }}
        onMouseUp={() => setDragging(false)}
        onMouseMove={(e) => {
          if (dragging) {
            let sideBar = document.getElementById("search-side-bar");
            let rect = sideBar.getBoundingClientRect();
            setHeight(e.clientY - rect.top - 1 + "px");
          }
        }}
      >
        <div className="search-algo-info"></div>
        <div id="search-side-bar-height-changer">
          <MoreHorizontal className="search-more-changer" />
        </div>
        <div className="search-algo-terminal"></div>
      </div>
      <div className="search-visualizer">
        <SearchTopBar
          algoState={props.algoState}
          array={props.array}
          setArray={props.setArray}
        />
        <div id="search-visualizer-c"></div>
      </div>
    </div>
  );
};

export default SearchingBase;
