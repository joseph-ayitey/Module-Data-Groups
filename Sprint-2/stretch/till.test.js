const totalTill = require("./till");


test("totalTill returns the total amount in pounds", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  expect(totalTill(till)).toBe("£4.40");
});
