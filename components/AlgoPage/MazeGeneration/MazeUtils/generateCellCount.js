import { store } from "/redux/store";
import {
  setGrid,
  setRowCount,
  setColCount,
  setCellWidth,
  setCellCount,
  setCellHeight,
} from "/redux/reducers/mazeSlice";
import { batch } from "react-redux";

export default function generateCellCount() {
  let size = store.getState().maze.cellSize;
  let conWidth = document.getElementById("visualizer-container").clientWidth;
  let conHeight = document.getElementById("visualizer-container").clientHeight;

  let noOfRows = Math.floor(conWidth / size);
  let noOfCols = Math.floor(conHeight / size);
  let rowArea = noOfRows * size;
  let colArea = noOfCols * size;
  let extraRowArea = conWidth - rowArea;
  let extraColArea = conHeight - colArea;
  let width = size + extraRowArea / noOfRows;
  let height = size + extraColArea / noOfCols;
  let cellCount = noOfRows * noOfCols;

  var grid = [];
  for (let i = 0; i < noOfCols; i++) {
    var col = [];
    for (let j = 0; j < noOfRows; j++) {
      col.push({ x: i, y: j, visited: false, nextCell: { x: -1, y: -1 } });
    }
    grid.push(col);
  }
  batch(() => {
    store.dispatch(setCellWidth(width));
    store.dispatch(setCellHeight(height));
    store.dispatch(setRowCount(noOfRows));
    store.dispatch(setColCount(noOfCols));
    store.dispatch(setCellCount(cellCount));
    store.dispatch(setGrid(grid));
  });
}
