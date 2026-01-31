const invert = require("./invert.js");

describe("invert function", () => {
  test("inverts a single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  test("inverts multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
  });

  test("returns empty object for empty input", () => {
    expect(invert({})).toEqual({});
  });

  test("handles duplicate values (last key wins)", () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
  });
});
