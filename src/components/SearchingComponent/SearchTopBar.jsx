import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Play, Zap, Copy, Square } from "react-feather";
import * as algoFunctions from "../../Utils/Algorithms";
import "./SearchTopBar.css";

const SearchTopBar = (props) => {
  const [arrayWidth, setArrayWidth] = useState(0);
  const [countMeter, setCountMeter] = useState(8);
  const [speedMeter, setSpeedMeter] = useState(400);

  let animationDelayIncrementor = 4;

  useEffect(() => {
    generateVisualArray();
  }, [props.array]);

  // Updating Count State
  const updateCountMeter = async (e, data) => {
    setCountMeter(data);
    animationDelayIncrementor = Math.floor(
      animationDelayIncrementor / countMeter
    );
    generateSortingArray();
  };

  // Updating Speed State
  const updateSpeedMeter = async (e, data) => {
    setSpeedMeter(data);
  };

  // Generating div to visualize array on DOM
  const generateVisualArray = () => {
    try {
      let sortingArrayContainer = document.getElementById(
        "search-visualizer-c"
      );
      sortingArrayContainer.innerHTML = "";

      let animationDelay = 0;

      props.array.map((element) => {
        let sortingArrayElement = document.createElement("div");
        sortingArrayElement.classList.add("searhing-array-element");
        sortingArrayElement.style.animationDelay = animationDelay + "ms";
        sortingArrayElement.style.height = element + "px";
        sortingArrayElement.style.width = arrayWidth + "px";
        sortingArrayContainer.appendChild(sortingArrayElement);
        animationDelay += 5;
      });
    } catch {}
  };

  // Generating random array and visualizing it on DOM
  function generateSortingArray() {
    props.setArray([]);
    let sortingArrayContainer = document.getElementById("search-visualizer-c");

    let height = sortingArrayContainer.clientHeight;
    let maxHeight = Math.floor((height * 80) / 100);
    let width = sortingArrayContainer.clientWidth;

    let sizeMeter = 22 - countMeter;
    setArrayWidth(sizeMeter);
    let arrayCount = Math.floor(width / sizeMeter);

    let tempArr = [];

    for (let i = 0; i < arrayCount; i++) {
      let randomHeight = Math.floor(Math.random() * maxHeight + 10); // Generating random Array values for sorting
      tempArr.push(randomHeight);
    }

    props.setArray(tempArr);
    generateVisualArray();
  }

  // Calling selected Search Function
  async function callAlgoFunction() {
    if (props.array.length == 0) {
      generateSortingArray();
    }
    if (props.algoState == "bubblesort")
      await algoFunctions.BubbleSort(props.array, props.setArray, speedMeter);
  }

  return (
    <div className="top-bar-c">
      <div className="top-bar">
        <div className="top-bar-left">
          {/* Generate Lines for Sorting Alogs */}
          <button
            className="top-nav-button no-select"
            onClick={generateSortingArray}
          >
            Generate Array
          </button>

          {/* Algorithms Vizualizer speed controller */}
          <button className="top-nav-button no-select">
            <Zap />
            Speed
            <Slider
              className="search-speed-slider"
              size="medium"
              min={0}
              max={3000}
              defaultValue={300}
              aria-label="Algorithm Speed Meter"
              onChange={updateSpeedMeter}
            />
          </button>

          {/* Sorting Array Size controller */}
          <button className="top-nav-button no-select">
            <Copy />
            Count
            <Slider
              className="search-count-slider"
              size="medium"
              min={1}
              max={18}
              defaultValue={8}
              aria-label="Array element count meter"
              onChange={updateCountMeter}
            />
          </button>
        </div>
        <div className="top-bar-right">
          {/* Start button -> start Algo vizualizer */}
          <button
            id="start"
            className="top-nav-button no-select toggleStart"
            onClick={callAlgoFunction}
          >
            <Play id="startSvg" />
            <Square id="stopSvg" />
            <span id="startText">Start</span>
            <span id="stopText">Stop</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchTopBar;
