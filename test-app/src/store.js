import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++; // Immer enables direct mutation
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Define a selector to get the current counter value
export const selectCounterValue = (state) => state.counter.value;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
