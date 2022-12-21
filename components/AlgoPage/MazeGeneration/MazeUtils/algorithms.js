import Stack from "./stack";
import { store } from "/redux/store";
import * as getNeighbours from "./getNeighbours";
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

    var neighbours = getNeighbours.getDFSNeighbours(
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

export async function BFSMazeGeneration() {
  console.log("BFSMazeGeneration");
  const rowCount = store.getState().maze.rowCount;
  const colCount = store.getState().maze.colCount;

  for (let i = 0; i < colCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      let grid = store.getState().maze.grid;
      var cell = grid[i][j];
      if (store.getState().maze.isGenerating == false) return;
      if (!cell.visited) {
        let currentCell = cell;
        const speed = Math.floor(store.getState().maze.speed);

        store.dispatch(setCurrentCell({ x: currentCell.x, y: currentCell.y }));

        await MakeDelay(speed);
        var neighbours = getNeighbours.getBFSNeighbours(
          currentCell.x,
          currentCell.y,
          grid,
          colCount,
          rowCount
        );
        while (neighbours.length > 0) {
          if (store.getState().maze.isGenerating == false) return;
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
          currentCell = randomNeighbour;
          store.dispatch(
            setCurrentCell({ x: currentCell.x, y: currentCell.y })
          );
          neighbours = getNeighbours.getBFSNeighbours(
            currentCell.x,
            currentCell.y,
            grid,
            colCount,
            rowCount
          );
        }
      }
    }
  }

  store.dispatch(setIsGenerated(true));
}

export async function RecursiveDivisionMazeGeneration() {
  const rowCount = store.getState().maze.rowCount;
  const colCount = store.getState().maze.colCount;
  const grid = store.getState().maze.grid;
  const speed = Math.floor(store.getState().maze.speed);

  await recursiveDivision(0, 0, colCount, rowCount, grid, speed);
  store.dispatch(setIsGenerated(true));
}

async function recursiveDivision(x, y, width, height, grid, speed) {
  if (width < 2 || height < 2) return;

  if (width > height) {
    let wall = Math.floor(Math.random() * (width - 1)) + 1;
    let hole = Math.floor(Math.random() * height);

    for (let i = 0; i < height; i++) {
      if (i == hole) continue;
      if (store.getState().maze.isGenerating == false) return;
      store.dispatch(
        setNextCell({
          currX: x + wall,
          currY: y + i,
          nextX: x + wall,
          nextY: y + i,
        })
      );
      await MakeDelay(speed);
    }

    await recursiveDivision(x, y, wall, height, grid, speed);
    await recursiveDivision(x + wall, y, width - wall, height, grid, speed);
  } else {
    let wall = Math.floor(Math.random() * (height - 1)) + 1;
    let hole = Math.floor(Math.random() * width);

    for (let i = 0; i < width; i++) {
      if (i == hole) continue;
      if (store.getState().maze.isGenerating == false) return;
      store.dispatch(
        setNextCell({
          currX: x + i,
          currY: y + wall,
          nextX: x + i,
          nextY: y + wall,
        })
      );
      await MakeDelay(speed);
    }

    await recursiveDivision(x, y, width, wall, grid, speed);
    await recursiveDivision(x, y + wall, width, height - wall, grid, speed);
  }
}

export async function KruskalMazeGeneration() {
  const rowCount = store.getState().maze.rowCount;
  const colCount = store.getState().maze.colCount;
  const grid = store.getState().maze.grid;
  const speed = Math.floor(store.getState().maze.speed);

  let walls = [];

  for (let i = 0; i < colCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      if (i % 2 == 0 || j % 2 == 0) continue;
      if (i != colCount - 1) {
        walls.push({
          x: i,
          y: j,
          nextX: i + 1,
          nextY: j,
        });
      }
      if (j != rowCount - 1) {
        walls.push({
          x: i,
          y: j,
          nextX: i,
          nextY: j + 1,
        });
      }
    }
  }

  walls = shuffle(walls);

  for (let i = 0; i < walls.length; i++) {
    if (store.getState().maze.isGenerating == false) return;
    let wall = walls[i];
    let cell1 = grid[wall.x][wall.y];
    let cell2 = grid[wall.nextX][wall.nextY];

    if (cell1.parent != cell2.parent) {
      store.dispatch(
        setNextCell({
          currX: wall.x,
          currY: wall.y,
          nextX: wall.nextX,
          nextY: wall.nextY,
        })
      );
      await MakeDelay(speed);
      cell1.parent = cell2.parent;
    }
  }

  store.dispatch(setIsGenerated(true));
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

