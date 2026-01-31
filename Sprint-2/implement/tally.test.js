const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

describe("tally function", () => {
// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("returns an object containing the count for each unique item", () => {
    const input = ["apple", "banana", "apple", "orange", "banana", "apple"];
    const expectedOutput = {
      apple: 3,
      banana: 2,
      orange: 1,
    };
    expect(tally(input)).toEqual(expectedOutput);
  });

// Given an empty array
// When passed to tally
// Then it should return an empty object
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("counts a single item", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
  });

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
  test("throws an error when input is not an array", () => {
    expect(() => tally("abc")).toThrow();
    expect(() => tally(123)).toThrow();
    expect(() => tally(null)).toThrow();
  });
  });