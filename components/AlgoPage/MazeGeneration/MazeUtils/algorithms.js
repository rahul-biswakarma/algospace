import Stack from "./stack";
import { store } from "/redux/store";
import getNeighbours from "./getNeighbours";
import { MakeDelay } from "/utils";
import {
  setCurrentCell,
  setNextCell,
  setIsGenerated,
} from "/redux/reducers/mazeSlice";

export async function DFSMazeGeneration() {
  const stack = new Stack();
  const rowCount = store.getState().maze.rowCount;
  const colCount = store.getState().maze.colCount;
  const initialCell = store.getState().maze.currentCell;

  stack.push(initialCell);

  while (!stack.isEmpty()) {
    if (store.getState().maze.isGenerating == false) return;
    var grid = store.getState().maze.grid;

    const speed = Math.floor(store.getState().maze.speed);

    let currentCell = stack.pop();

    store.dispatch(setCurrentCell({ x: currentCell.x, y: currentCell.y }));

    await MakeDelay(speed);

    var neighbours = getNeighbours(
      currentCell.x,
      currentCell.y,
      grid,
      colCount,
      rowCount
    );

    if (neighbours.length > 0) {
      stack.push(currentCell);

      let randomNeighbour =
        neighbours[Math.floor(Math.random() * neighbours.length)];

      store.dispatch(
        setNextCell({
          currX: currentCell.x,
          currY: currentCell.y,
          nextX: randomNeighbour.x,
          nextY: randomNeighbour.y,
        })
      );

      randomNeighbour.visited = true;
      stack.push(randomNeighbour);
    }
  }
  store.dispatch(setIsGenerated(true));
}
