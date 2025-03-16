// src/features/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// An asynchronous thunk action that simulates an API call to increment the counter by a given amount
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount, thunkAPI) => {
    // Simulate a network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(amount);
      }, 500);
    });
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, loading: false },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
