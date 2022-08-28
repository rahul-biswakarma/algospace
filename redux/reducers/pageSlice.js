import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  algoname: "Home",
  algoId: "home",
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
  },
});

// Action creators are generated for each case reducer function
export const { setAlgoName, setAlgoId } = pageSlice.actions;

export default pageSlice.reducer;
