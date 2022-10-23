import { store } from "/redux/store";
import {
  setGrid,
  setCellWidth,
  setCellHeight,
  setRandomIdNumber,
} from "/redux/reducers/mazeSlice";
import { batch } from "react-redux";

export default function generateCellCount() {
  let randomIdNumber = Math.floor(Math.random() * 50);
  let count = store.getState().maze.cellCount;
  let conWidth = document.getElementById("visualizer-container").clientWidth;
  let conHeight = document.getElementById("visualizer-container").clientHeight;
  let width = conWidth / count;
  let height = conHeight / count;
  var grid = [];
  for (let i = 0; i < count; i++) {
    var col = [];
    for (let j = 0; j < count; j++) {
      col.push({ x: i, y: j, visited: false, nextCell: { x: -1, y: -1 } });
    }
    grid.push(col);
  }
  batch(() => {
    store.dispatch(setCellWidth(width));
    store.dispatch(setRandomIdNumber(randomIdNumber));
    store.dispatch(setCellHeight(height));
    store.dispatch(setGrid(grid));
  });
}
