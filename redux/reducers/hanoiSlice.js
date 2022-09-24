import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disc: 3,
  maxDisc: 8,
  height: 0,
  maxHeight: 50,
  speed: 400,
  maxSpeed: 500,
  isRunning: false,
  towerA: [],
  towerB: [],
  towerC: [],
  aCount: 0,
  bCount: 0,
  cCount: 0,
  startTime: 0,
  endTime: 0,
  abSwap: 0,
  bcSwap: 0,
  acSwap: 0,
};

const hanoiSlice = createSlice({
  name: "hanoi",
  initialState,
  reducers: {
    setDisc: (state, action) => {
      state.disc = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    setIsRunning: (state, action) => {
      state.isRunning = action.payload;
    },
    setTowerA: (state, action) => {
      state.towerA = action.payload;
      state.aCount = action.payload.length;
    },
    setTowerB: (state, action) => {
      state.towerB = action.payload;
      state.bCount = action.payload.length;
    },
    setTowerC: (state, action) => {
      state.towerC = action.payload;
      state.cCount = action.payload.length;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload;
    },
    incrementABSwap: (state) => {
      state.abSwap += 1;
    },
    incrementBCSwap: (state) => {
      state.bcSwap += 1;
    },
    incrementACSwap: (state) => {
      state.acSwap += 1;
    },
    resetStats: (state) => {
      state.isRunning = false;
      state.towerA = [];
      state.towerB = [];
      state.towerC = [];
      state.aCount = 0;
      state.bCount = 0;
      state.cCount = 0;
      state.startTime = 0;
      state.endTime = 0;
      state.abSwap = 0;
      state.bcSwap = 0;
      state.acSwap = 0;
    },
  },
});

export const {
  setDisc,
  setSpeed,
  setHeight,
  setIsRunning,
  setTowerA,
  setTowerB,
  setTowerC,
  resetStats,
  setStartTime,
  setEndTime,
  incrementABSwap,
  incrementACSwap,
  incrementBCSwap,
} = hanoiSlice.actions;

export default hanoiSlice.reducer;
