import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  arrayCount: 0,
  comparisons: 0,
  swaps: 0,
  running: false,
  status: "UNSORTED",
  barWidth: 15,
  maxBarWidth: 30,
  speed: 50,
  maxSpeed: 500,
  compEle1: -1,
  compEle2: -1,
  swapEle1: -1,
  swapEle2: -1,
  spclEle: -1,
  mergeArr1: [-1, -1],
  mergeArr2: [-1, -1],
};

export const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setArray: (state, action) => {
      state.array = action.payload;
      state.arrayCount = action.payload.length;
    },
    incrementComparisons: (state) => {
      state.comparisons++;
    },
    incrementSwaps: (state) => {
      state.swaps++;
    },
    setRunning: (state, action) => {
      state.running = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      if (action.payload == "unsorted") {
        state.comparisons = 0;
        state.swaps = 0;
      } else {
        state.compEle1 = -1;
        state.compEle2 = -1;
        state.swapEle1 = -1;
        state.swapEle2 = -1;
        state.spclEle = -1;
      }
    },
    setBarWidth: (state, action) => {
      state.barWidth = action.payload;
    },
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    resetStats: (state) => {
      state.comparisons = 0;
      state.swaps = 0;
      state.compEle1 = -1;
      state.compEle2 = -1;
      state.swapEle1 = -1;
      state.swapEle2 = -1;
      state.spclEle = -1;
      state.status = "unsorted";
    },
    setCompElements: (state, action) => {
      state.compEle1 = action.payload[0];
      state.compEle2 = action.payload[1];
    },
    setSwapElements: (state, action) => {
      state.swapEle1 = action.payload[0];
      state.swapEle2 = action.payload[1];
    },
    setSpecialElement: (state, action) => {
      state.spclEle = action.payload;
    },
    setMergeArr1: (state, action) => {
      state.mergeArr1 = action.payload;
    },
    setMergeArr2: (state, action) => {
      state.mergeArr2 = action.payload;
    },
    resetMergeArrays: (state) => {
      state.mergeArr1 = [];
      state.mergeArr2 = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setArray,
  incrementComparisons,
  incrementSwaps,
  setRunning,
  setStatus,
  setBarWidth,
  setSpeed,
  resetStats,
  setCompElements,
  setSwapElements,
  setSpecialElement,
  setMergeArr1,
  setMergeArr2,
  resetMergeArrays,
} = sortingSlice.actions;

export default sortingSlice.reducer;
