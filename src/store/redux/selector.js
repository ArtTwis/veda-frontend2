import { createSelector } from "@reduxjs/toolkit";
import initialState from "./initialState.js";

export const selectDomain = (state) => state.app || initialState;

export const selectTheme = createSelector(
  [selectDomain],
  (state) => state.theme
);
