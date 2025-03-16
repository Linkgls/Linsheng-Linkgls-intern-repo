// src/utils/add.test.js
import { add } from "./add";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(1, 3)).toBe(4);
  expect(add(0, 0)).toBe(0);
  expect(add(-1, 1)).toBe(0);
  expect(add(-1, -1)).toBe(-2);
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});
