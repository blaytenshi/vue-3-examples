// jest tests are built into codesandbox,
// no need to add jest as a dependency
import { expect, test } from "vitest";
import sum from "./sum";

test("adds 1 and 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
