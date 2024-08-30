import { createSelector } from "@reduxjs/toolkit";
import initialState from "./initialState.js";

export const selectDomain = (state) => state.auth || initialState;

export const selectError = createSelector(
  [selectDomain],
  (state) => state.errors
);

export const selectToken = createSelector(
  [selectDomain],
  (state) => state.token
);

export const selectForm = createSelector([selectDomain], (state) => state.form);
