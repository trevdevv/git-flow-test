// importing the javascript function
const mathOps = require("../src/calculator.js");

describe("Calculator tests", () => {
  test("add 2 numbers", () => {
    // arrange & act
    const val = mathOps.sum(3, 4);

    // assert
    expect(val).toBe(7);
  });
  test("add 2 numbers to get success response", () => {
    // arrange & act
    const val = mathOps.sum(3, 4);

    // assert
    expect(val).toBe(7);
  });
  test("divide 2 numbers", () => {
    // arrange & act
    const val = mathOps.divide(6, 2);

    // assert
    expect(val).toBe(3);
  });
  test("multiple 2 numbers", () => {
    // arrange & act
    const val = mathOps.multiply(6, 2);

    // assert
    expect(val).toBe(12);
  });
});
