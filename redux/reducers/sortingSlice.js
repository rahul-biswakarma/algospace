import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  arrayCount: 0,
  comparisons: 0,
  swaps: 0,
  paused: false,
  status: "UNSORTED",
  barWidth: 20,
  maxBarWidth: 30,
  speed: 150,
  maxSpeed: 500,
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
    setPause: (state, action) => {
      state.paused = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      if (action.payload == "unsorted") {
        state.comparisons = 0;
        state.swaps = 0;
      }
    },
    setBarWidth: (state, action) => {
      state.barWidth = action.payload;
    },
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setArray,
  incrementComparisons,
  incrementSwaps,
  setPause,
  setStatus,
  setBarWidth,
  setSpeed,
} = sortingSlice.actions;

export default sortingSlice.reducer;
