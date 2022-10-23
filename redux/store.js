import { configureStore } from "@reduxjs/toolkit";
import sortingSlice from "./reducers/sortingSlice";
import searchingSlice from "./reducers/searchingSlice";
import pageSlice from "./reducers/pageSlice";
import hanoiSlice from "./reducers/hanoiSlice";
import mazeSlice from "./reducers/mazeSlice";

export const store = configureStore({
  reducer: {
    sorting: sortingSlice,
    page: pageSlice,
    searching: searchingSlice,
    hanoi: hanoiSlice,
    maze: mazeSlice,
  },
});
