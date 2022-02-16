import React, { useState } from "react";
import Slider from "react-input-slider";
import { Play, Zap } from "react-feather";
import "./style.css";

function generateSortingArray(maxSpeed, speedMeter) {
  let mainDiv = document.getElementById("main-c"); // Main div -> where visualization occurs
  let height = mainDiv.clientHeight;
  let width = mainDiv.clientWidth;

  let vrLineBg = document.getElementById("main-bg-lines"); // Vertical Guide lines for sorting algos present in Main Component
  let animationDelay = 0; // This variable used to delay animation of vrLineBg

  vrLineBg.innerHTML = ""; //Clears any previous content to generate new Lines for sorting

  let vrLineBgCount = Math.floor(width / 20); // Counts number of vertical lines to be generated

  // Generating Vertical Guides Lines and Array value lines for Sorting
  for (let i = 0; i < vrLineBgCount; i++) {
    let div = document.createElement("div");
    div.classList.add("vr-line-bg", "vr-line-bg-animate");
    vrLineBg.appendChild(div);
    div.style.animationDelay = animationDelay + "ms";
    animationDelay += 50;
  }
}

const TopBar = () => {
  const [speedMeter, setSpeedMeter] = useState({ x: 50 });

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
              axis="x"
              x={speedMeter.x}
              onChange={({ x }) =>
                setSpeedMeter((speedMeter) => ({ ...speedMeter, x }))
              }
            />
          </button>
        </div>
        <div className="top-bar-right">
          {/* Start button -> start Algo vizualizer */}
          <button id="start" className="top-nav-button no-select">
            <Play />
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
