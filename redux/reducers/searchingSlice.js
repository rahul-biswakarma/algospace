import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  arrayCount: 0,
  target: 0,
  barWidth: 20,
  maxBarWidth: 30,
  speed: 50,
  maxSpeed: 500,
  comparisons: 0,
  status: "Not Searching",
  isSearching: false,
};

const searchingSlice = createSlice({
  name: "searching",
  initialState,
  reducers: {
    setArray: (state, action) => {
      state.array = action.payload;
      state.arrayCount = action.payload.length;
    },
    setTarget: (state, action) => {
      state.target = action.payload;
    },
    incrementComparisons: (state) => {
      state.comparisons++;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
      if (action.payload) state.status = "searching";
    },
    setBarWidth: (state, action) => {
      state.barWidth = action.payload;
    },
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    resetStats: (state) => {
      state.comparisons = 0;
      state.isSearching = false;
      state.status = "not searching";
    },
  },
});

export const {
  setArray,
  setTarget,
  incrementComparisons,
  setStatus,
  setIsSearching,
  resetStats,
} = searchingSlice.actions;

export default searchingSlice.reducer;
