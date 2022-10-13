import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  algoname: "Home",
  algoId: "home",
  algoCategory: "home",
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setAlgoName: (state, action) => {
      state.algoName = action.payload;
    },
    setAlgoId: (state, action) => {
      state.algoId = action.payload;
    },
    setAlgoCategory: (state, action) => {
      state.algoCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlgoName, setAlgoId, setAlgoCategory } = pageSlice.actions;

export default pageSlice.reducer;
