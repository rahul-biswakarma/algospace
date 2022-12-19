import React from "react";
import { useSelector } from "react-redux";

import Cell from "./Cell";
import TopBar from "/components/TopBar";
import Player from "/components/AlgoPage/MazeGeneration/Player";

const VisualizerContainer = () => {
  var colKeyNum = 0;
  const grid = useSelector((state) => state.maze.grid);
  const cellCount = useSelector((state) => state.maze.cellCount);
  const cellWidth = useSelector((state) => state.maze.cellWidth);
  const cellHeight = useSelector((state) => state.maze.cellHeight);

  return (
    <div className="relative w-full h-[70vh] select-none">
      <TopBar />
      <div
        id="visualizer-container"
        className="realtive table border-collapse h-full w-full border-[3px] border-green"
      >
        {/* <Player /> */}
        {grid.map((col) => {
          return (
            <div
              className="table-row"
              key={`grid-col-${colKeyNum++}`}
              id={`grid-col-${colKeyNum}`}
            >
              {col.map((cell) => {
                return (
                  <Cell
                    key={`cell-x${cell.x}-y${cell.y}`}
                    x={cell.x}
                    y={cell.y}
                    width={cellWidth}
                    height={cellHeight}
                    cellCount={cellCount}
                    nextX={cell.nextCell.x}
                    nextY={cell.nextCell.y}
                    visited={cell.visited}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisualizerContainer;
