// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

//Other cases
//Empty string 

test("parses empty query string", () => {
  expect(parseQueryString("")).toEqual({});
});


//Key with no value
test("parses key with no value", () => {
  expect(parseQueryString("flag")).toEqual({
    flag: "",
  });
});


// Key with empty value
test("parses key with empty value after equals", () => {
  expect(parseQueryString("flag=")).toEqual({
    flag: "",
  });
});
