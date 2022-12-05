import React from "react";
import { useSelector } from "react-redux";

const Cell = (props) => {
  const {
    x,
    y,
    width,
    height,
    cellCount,
    nextX,
    nextY,
    visited,
    randomIdNumber,
  } = props;
  const currentCell = useSelector((state) => state.maze.currentCell);
  const isGenerating = useSelector((state) => state.maze.isGenerating);

  var className = "maze-cell";
  var targetCellId = "";

  if (visited === true) className += " border-green";
  else className += " border-green-bg-4";

  // Generating cell id from where wall will be removed
  if (x - 1 === nextX || y - 1 === nextY)
    targetCellId = `${randomIdNumber}x${nextX}y${nextY}`;
  else targetCellId = `${randomIdNumber}x${x}y${y}`;

  // Deciding where to place wall to generate grid
  if (y === cellCount - 1 && x === cellCount - 1) className += "";
  else if (x === cellCount - 1) className += " border-r-[3px]";
  else if (y === cellCount - 1) className += " border-b-[3px]";
  else className += " border-r-[3px] border-b-[3px]";

  // Deciding where to remove wall based on targetCellId variable
  if (y === nextY && targetCellId === `x${x}y${y}`)
    className += " border-b-[0px]";
  if (x === nextX && targetCellId === `x${x}y${y}`)
    className += " border-l-[0px]";

  // Checking for current cell and neighbour cell
  if (x === currentCell.x && y === currentCell.y && isGenerating === true)
    className += " bg-green border-green";

  // Removing wall from prevoius neighbour cell
  if (y === nextY) {
    document.getElementById(targetCellId).style.borderBottomWidth = "0px";
  }
  if (x === nextX) {
    document.getElementById(targetCellId).style.borderRightWidth = "0px";
  }

  return (
    <div
      id={`${randomIdNumber}x${x}y${y}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={className}
    ></div>
  );
};

export default Cell;