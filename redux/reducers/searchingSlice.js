import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  target: 0,
  comparisons: 0,
  status: "not found",
  isSearching: false,
};

const searchingSlice = createSlice({
  name: "searching",
  initialState,
  reducers: {
    setArray: (state, action) => {
      state.array = action.payload;
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
    },
  },
});

export const {
  setArray,
  setTarget,
  incrementComparisons,
  setStatus,
  setIsSearching,
} = searchingSlice.actions;

export default searchingSlice.reducer;
