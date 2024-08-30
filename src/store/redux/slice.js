import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.js";

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { reducer: globalReducers, actions: globalActions } = globalSlice;
