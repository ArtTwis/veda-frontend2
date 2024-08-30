import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.js";

/**
 * createAsyncThunk() - API call to authenticate user...
 * @param string "auth/authenticateUser"
 * @param CallbackFunction for API call
 * @returns thunk actions ["pending", "fulfilled", "rejected", "settled"]
 * @example dispatch(authenticateUser())
 */
const authenticateUser = createAsyncThunk("auth/authenticateUser", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts");
    const data = await response.json();
    console.log("data :>> ", data);
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      // TODO: response handling is pending..
      state.loading = false;
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    // builder.addCase(authenticateUser.settled, (state, action) => {
    // });
  },
});

export const { reducer: authReducers, actions: authActions } = authSlice;
