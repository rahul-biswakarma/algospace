import React from "react";
import { useSelector } from "react-redux";

import TopBar from "/components/TopBar";
import Cell from "./Cell";

const VisualizerContainer = () => {
  const cellCount = useSelector((state) => state.maze.cellCount);
  const cellWidth = useSelector((state) => state.maze.cellWidth);
  const cellHeight = useSelector((state) => state.maze.cellHeight);
  const grid = useSelector((state) => state.maze.grid);
  const randomIdNumber = useSelector((state) => state.maze.randomIdNumber);
  const isGenerated = useSelector((state) => state.maze.isGenerated);

  return (
    <div className="relative w-full h-[70vh] select-none">
      <TopBar />
      <div
        id="visualizer-container"
        className="realtive flex flex-row flex-wrap h-full w-full border-[3px] border-green"
      >
        <div
          id="player"
          className="absolute top-0 border-blue bg-blue-bg border-[3px]"
          style={{
            width: `${cellWidth - 3}px`,
            height: `${cellHeight - 3}px`,
            opacity: isGenerated === true ? "1" : "0",
            left: 3 + "px",
            top: 8 + "px",
          }}
        ></div>
        {grid.map((col) => {
          return col.map((cell) => {
            return (
              <Cell
                key={`cell${randomIdNumber}x${cell.x}y${cell.y}`}
                x={cell.x}
                y={cell.y}
                width={cellWidth}
                height={cellHeight}
                cellCount={cellCount}
                nextX={cell.nextCell.x}
                nextY={cell.nextCell.y}
                visited={cell.visited}
                randomIdNumber={randomIdNumber}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default VisualizerContainer;
