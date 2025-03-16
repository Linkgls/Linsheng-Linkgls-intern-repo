// src/features/counterSlice.test.js
import counterReducer, {
  increment,
  decrement,
  incrementAsync,
} from "./counterSlice";

describe("counter reducer", () => {
  const initialState = { value: 0, loading: false };

  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle increment action", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(1);
  });

  it("should handle decrement action", () => {
    const actual = counterReducer({ value: 1, loading: false }, decrement());
    expect(actual.value).toEqual(0);
  });
});

describe("async increment action", () => {
  it("should dispatch pending and then fulfilled action", async () => {
    // Create a mock dispatch function and a dummy getState function
    const dispatch = jest.fn();
    const getState = () => ({});

    // Call the thunk with an amount of 5
    const action = await incrementAsync(5)(dispatch, getState, undefined);

    // Verify that the action type indicates a fulfilled state and payload is 5
    expect(action.type).toEqual("counter/incrementAsync/fulfilled");
    expect(action.payload).toEqual(5);
  });
});
