import { configureStore } from "@reduxjs/toolkit";
import darkSlice from "./darkSlice";

export const store = configureStore({
  reducer: {
    ThemeToggle: darkSlice,
  },
});
