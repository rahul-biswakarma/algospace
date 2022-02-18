import React, { useState } from "react";
import Slider from "react-input-slider";
import { Play, Zap, Copy, Square } from "react-feather";
import * as algoFunctions from "../../util/algorithm";
import "./style.css";

const TopBar = () => {
  var arrayConatiner = [];
  var animationDelayIncrement = 0;

  const [speedMeter, setSpeedMeter] = useState({ x: 300 });
  const [sizeMeter, setsizeMeter] = useState({ x: 14 });

  async function callAlgoFunction() {
    let stopFunc = false;

    if (document.getElementById("start").classList.contains("toggleStop"))
      stopFunc = true;

    document.getElementById("start").classList.remove("toggleStart");
    document.getElementById("start").classList.add("toggleStop");
    document.getElementById("startSvg").style.display = "none";
    document.getElementById("startText").style.display = "none";
    document.getElementById("stopSvg").style.display = "block";
    document.getElementById("stopText").style.display = "block";

    console.log(stopFunc);

    if (arrayConatiner.length === 0 && !stopFunc) {
      await generateSortingArray();

      await algoFunctions.bubbleSort(
        arrayConatiner,
        speedMeter.x,
        animationDelayIncrement
      );
    } else {
      await algoFunctions.bubbleSort(
        arrayConatiner,
        speedMeter.x,
        animationDelayIncrement,
        stopFunc
      );
    }
    document.getElementById("startSvg").style.display = "block";
    document.getElementById("startText").style.display = "block";
    document.getElementById("stopSvg").style.display = "none";
    document.getElementById("stopText").style.display = "none";
    document.getElementById("start").classList.remove("toggleStop");
    document.getElementById("start").classList.add("toggleStart");

    console.log("call Algo function over");
  }

  async function generateSortingArray() {
    return new Promise((resolve, reject) => {
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
      resolve(true);
    });
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
            <Copy />
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

export default TopBar;
