const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test("returns true if the object contains the property, false otherwise", () => {
  const obj = { a: 1, b: 2 };

  expect(contains(obj, "a")).toBe(true);
  expect(contains(obj, "b")).toBe(true);
  expect(contains(obj, "c")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true when object contains the given property", () => {
  const obj = { a: 1, b: 2 };

  expect(contains(obj, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false when passed a non-existent property name", () => {
  const obj = { a: 1, b: 2 };

  expect(contains(obj, "c")).toBe(false);
})

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
  it('should return false when given invalid parameters', () => {
    const invalidInput = [1, 2, 3]; // Example invalid input
    const result = contains(invalidInput, 2); 
    expect(result).toBe(false);
  });
