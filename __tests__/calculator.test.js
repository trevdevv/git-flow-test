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
  test("subtract 2 numbers", () => {
    // arrange an act
    const val = mathOps.subtract(6,2);

    // assert
    expect(val).toBe(4);
  })
  test("exponent of two numbers", () => {
    // arrange an act
    const val = mathOps.exponent(2,2);

    // assert
    expect(val).toBe(4);
  })
  test("remainder of two numbers", () => {
    // arrange an act
    const val = mathOps.remainder(12,5);

    // assert
    expect(val).toBe(2);
  })
});
