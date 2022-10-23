import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grid: [],
  cellWidth: 0,
  cellHeight: 0,
  cellCount: 10,
  minCellCount: 4,
  maxCellCount: 30,
  currentCell: { x: 0, y: 0 },
  nextCell: { x: -1, y: -1 },
  randomIdNumber: 0,
  speed: 300,
  maxSpeed: 300,
  isGenerating: false,
  isGenerated: false,
  status: "generation not started",
};

const mazeSlice = createSlice({
  name: "maze",
  initialState,
  reducers: {
    setGrid: (state, action) => {
      state.grid = action.payload;
    },
    setIsGenerated: (state, action) => {
      state.isGenerated = action.payload;
    },
    setCellWidth: (state, action) => {
      state.cellWidth = action.payload;
    },
    setCellHeight: (state, action) => {
      state.cellHeight = action.payload;
    },
    setCellCount: (state, action) => {
      state.cellCount = action.payload;
    },
    setRandomIdNumber: (state, action) => {
      state.randomIdNumber = action.payload;
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
  },
});

export const {
  setGrid,
  setCellWidth,
  setCellHeight,
  setIsGenerated,
  setCellCount,
  setRandomIdNumber,
  setSpeed,
  setCurrentCell,
  setNextCell,
  setIsGenerating,
  setStatus,
} = mazeSlice.actions;

export default mazeSlice.reducer;
