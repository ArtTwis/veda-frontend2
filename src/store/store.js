import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducers } from "../views/SignIn/redux/slice";
import { globalReducers } from "./redux/slice";

const rootReducers = combineReducers({
  auth: authReducers,
  global: globalReducers,
});

export const store = configureStore({
  reducer: rootReducers,
});
