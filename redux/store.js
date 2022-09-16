import { configureStore } from "@reduxjs/toolkit";
import sortingSlice from "./reducers/sortingSlice";
import searchingSlice from "./reducers/searchingSlice";
import pageSlice from "./reducers/pageSlice";

export const store = configureStore({
  reducer: {
    sorting: sortingSlice,
    page: pageSlice,
    searching: searchingSlice,
  },
});
