import { store } from "/redux/store";

export default function resetBorder() {
  const colCount = store.getState().maze.colCount;
  const rowCount = store.getState().maze.rowCount;

  for (let i = 0; i < colCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      let targetCellId = `cell-x${i}-y${j}`;
      if (document.getElementById(targetCellId) != null) {
        document.getElementById(targetCellId).style.borderBottomWidth = "2px";
        document.getElementById(targetCellId).style.borderRightWidth = "2px";
      }
    }
  }
}
