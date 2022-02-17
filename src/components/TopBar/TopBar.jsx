import React, { useState } from "react";
import Slider from "react-input-slider";
import { Play, Zap } from "react-feather";
import * as algoFunctions from "../../util/algorithm";
import "./style.css";

const TopBar = () => {
  var arrayConatiner = [];
  var animationDelayIncrement = 0;

  const [speedMeter, setSpeedMeter] = useState({ x: 300 });
  const [sizeMeter, setsizeMeter] = useState({ x: 14 });

  function callAlgoFunction() {
    if (arrayConatiner.length === 0) {
      let h2 = document.createElement("h2");
      h2.classList.add("no-array-found");
      h2.innerHTML +=
        "Opps! Operation can't be performed in empty array 😅 <br /><b>Kindly click on Generate Array to get started</b>";

      document.getElementById("sorting-array-c").appendChild(h2);
    } else {
      algoFunctions.bubbleSort(
        arrayConatiner,
        speedMeter.x,
        animationDelayIncrement
      );
    }
  }

  function generateSortingArray() {
    arrayConatiner = [];

    // Selecting Sorting Array Div Conatiner
    let sortingArrayContainer = document.getElementById("sorting-array-c");

    let height = sortingArrayContainer.clientHeight;
    let width = sortingArrayContainer.clientWidth;

    //Inverting Size Meter
    let sizeMeterLocal = 22 - sizeMeter.x;

    // Animation Delay Increment Value
    animationDelayIncrement = Math.floor((speedMeter.x / 1000) * 100);
    /*
    LOGIC FOR ANIMATION DELAY INCREMENT VALUE:

        1. Calculating the precentage of speedMeter from Speed Input Slider
        2. Then using that to calculate Incremental Value

        MAX DELAY == 20
    */

    // Default Animation Delay
    let animationDelay = animationDelayIncrement;

    // Setting Max height for Sorting Array Div
    let maxHeight = Math.floor((height * 80) / 100);

    // Emptying the Sorting Array Div Container
    sortingArrayContainer.innerHTML = "";

    // Counting no. of array element can be generated
    let arrayCount = Math.floor(width / sizeMeterLocal);

    // Generating Array Element as Divs in Sorting Array Container
    for (let i = 0; i < arrayCount; i++) {
      let sortingArrayElement = document.createElement("div");
      let randomHeight = Math.floor(Math.random() * maxHeight + 10); // Generating random Array values for sorting

      sortingArrayElement.style.height = randomHeight + "px";
      sortingArrayElement.style.width = sizeMeterLocal + "px";

      sortingArrayElement.style.animationDuration = speedMeter.x + "ms";
      sortingArrayElement.style.animationDelay = animationDelay + "ms";

      sortingArrayElement.classList.add("sorting-array-element");

      arrayConatiner.push(randomHeight);
      sortingArrayContainer.appendChild(sortingArrayElement);

      // Incrementing Animation Delay for next element
      animationDelay += animationDelayIncrement;
    }
  }

  return (
    <div className="top-bar-c">
      <div className="top-bar">
        <div className="top-bar-left">
          {/* Generate Lines for Sorting Alogs */}
          <button
            id="create-sorting-array"
            className="top-nav-button no-select"
            onClick={generateSortingArray}
          >
            Generate Array
          </button>

          {/* Algorithms Vizualizer speed controller */}
          <button
            id="create-sorting-array"
            className="top-nav-button no-select"
          >
            <Zap />
            Speed
            <Slider
              styles={{
                track: {
                  backgroundColor: "var(--pink)",
                },
                active: {
                  backgroundColor: "var(--slider-bg)",
                },
              }}
              axis="x"
              xmin={0}
              xmax={1000}
              xreverse={true}
              x={speedMeter.x}
              onChange={({ x }) =>
                setSpeedMeter((speedMeter) => ({ ...speedMeter, x }))
              }
            />
          </button>

          {/* Sorting Array Size controller */}
          <button
            id="create-sorting-array"
            className="top-nav-button no-select"
          >
            <Zap />
            Count
            <Slider
              styles={{
                track: {
                  backgroundColor: "var(--slider-bg)",
                },
                active: {
                  backgroundColor: "var(--pink)",
                },
              }}
              axis="x"
              x={sizeMeter.x}
              xmin={2}
              xmax={20}
              onChange={({ x }) =>
                setsizeMeter((sizeMeter) => ({ ...sizeMeter, x }))
              }
            />
          </button>
        </div>
        <div className="top-bar-right">
          {/* Start button -> start Algo vizualizer */}
          <button
            id="start"
            className="top-nav-button no-select"
            onClick={callAlgoFunction}
          >
            <Play />
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
