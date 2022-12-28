import React from "react";
import { useSelector } from "react-redux";

const Cell = (props) => {
  const { x, y, width, height, cellCount, nextX, nextY, visited } = props;
  const currentCell = useSelector((state) => state.maze.currentCell);
  const isGenerating = useSelector((state) => state.maze.isGenerating);

  var className =
    "maze-cell table-cell ease-linear duration-300 border-r-[2px] border-b-[2px]";
  var targetCellId = "";

  if (x == currentCell.x && y == currentCell.y) className += " transition-none";
  else className += " transition-all";

  // This code highlights visited cells
  if (visited === true) className += " border-green";
  else className += " border-green-bg";

  // *********************************************
  // Enable this code to see possoble next cells
  if (
    !visited &&
    isGenerating &&
    ((x == currentCell.x - 1 && y == currentCell.y) ||
      (x == currentCell.x + 1 && y == currentCell.y) ||
      (x == currentCell.x && y == currentCell.y - 1) ||
      (x == currentCell.x && y == currentCell.y + 1))
  )
    className += " bg-red absolute border-red ease-linear duration-100";
  else className += " bg-transparent relative";
  // **********************************************

  // Generating cell id from where wall will be removed
  if (x - 1 === nextX || y - 1 === nextY)
    targetCellId = `cell-x${nextX}-y${nextY}`;
  else targetCellId = `cell-x${x}-y${y}`;

  // Deciding where to place wall to generate grid
  // if (y === cellCount - 1 && x === cellCount - 1) className += "";
  // else if (x === cellCount - 1) className += " border-r-[3px]";
  // else if (y === cellCount - 1) className += " border-b-[3px]";
  // else className += " border-r-[3px] border-b-[3px]";

  // Deciding where to remove wall based on targetCellId variable
  if (y === nextY && targetCellId === `cell-x${x}-y${y}`)
    className += " border-b-[0px]";
  if (x === nextX && targetCellId === `cell-x${x}-y${y}`)
    className += " border-l-[0px]";

  // Checking for current cell and neighbour cell
  if (x === currentCell.x && y === currentCell.y && isGenerating === true)
    className += " bg-green";

  // Removing wall from prevoius neighbour cell
  if (y === nextY) {
    document.getElementById(targetCellId).style.borderBottomWidth = "0px";
  }
  if (x === nextX) {
    document.getElementById(targetCellId).style.borderRightWidth = "0px";
  }

  return (
    <div
      id={`cell-x${x}-y${y}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={className}
    ></div>
  );
};

export default Cell;
