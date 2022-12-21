import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grid: [],
  rowCount: 0,
  colCount: 0,
  cellCount: 0,
  cellWidth: 0,
  cellHeight: 0,
  cellSize: 30,
  minCellSize: 25,
  maxCellSize: 100,
  playerPosition: { x: 0, y: 0 },
  playerWidth: 0,
  playerHeight: 0,
  playerWidthOffset: 3,
  playerHeightOffset: 3,
  currentCell: { x: 0, y: 0 },
  nextCell: { x: -1, y: -1 },
  randomIdNumber: 0,
  speed: 0,
  maxSpeed: 300,
  isGenerating: false,
  isGenerated: false,
  translateX: 0,
  translateY: 0,
  status: "generation not started",
};

const mazeSlice = createSlice({
  name: "maze",
  initialState,
  reducers: {
    setGrid: (state, action) => {
      state.grid = [];
      state.grid = action.payload;
    },
    setIsGenerated: (state, action) => {
      state.isGenerated = action.payload;
    },
    setCellCount: (state, action) => {
      state.cellCount = action.payload;
    },
    setRowCount: (state, action) => {
      state.rowCount = action.payload;
    },
    setColCount: (state, action) => {
      state.colCount = action.payload;
    },
    setCellWidth: (state, action) => {
      state.cellWidth = action.payload;
      state.playerWidth = action.payload;
    },
    setCellHeight: (state, action) => {
      state.cellHeight = action.payload;
      state.playerHeight = action.payload;
    },
    setCellSize: (state, action) => {
      state.cellSize = action.payload;
    },
    setPlayerPosotion: (state, action) => {
      state.playerPosition = action.payload;
    },
    setCurrentCell: (state, action) => {
      state.currentCell = action.payload;
      state.grid = Object.assign([...state.grid], {
        [action.payload.x]: Object.assign([...state.grid[action.payload.x]], {
          [action.payload.y]: {
            ...state.grid[action.payload.x][action.payload.y],
            visited: true,
          },
        }),
      });
    },
    setNextCell: (state, action) => {
      state.nextCell = action.payload;
      state.grid = Object.assign([...state.grid], {
        [action.payload.currX]: Object.assign(
          [...state.grid[action.payload.currX]],
          {
            [action.payload.currY]: {
              ...state.grid[action.payload.currX][action.payload.currY],
              nextCell: {
                x: action.payload.nextX,
                y: action.payload.nextY,
              },
            },
          }
        ),
      });
    },
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    setIsGenerating: (state, action) => {
      state.isGenerating = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setTranslateX: (state, action) => {
      state.translateX = action.payload;
    },
    setTranslateY: (state, action) => {
      state.translateY = action.payload;
    },
  },
});

export const {
  setGrid,
  setCellCount,
  setRowCount,
  setColCount,
  setCellWidth,
  setCellHeight,
  setIsGenerated,
  setCellSize,
  setPlayerPosotion,
  setSpeed,
  setCurrentCell,
  setNextCell,
  setIsGenerating,
  setStatus,
  setTranslateX,
  setTranslateY,
} = mazeSlice.actions;

export default mazeSlice.reducer;
