// importing the javascript function
const errors = require("../src/error");

describe("Error Test", () => {
  test('compiling android goes as expected', () => {
    expect(errors.wrongJDK).toThrow();
    expect(errors.wrongJDK).toThrow(Error);

    expect(errors.wrongJDK).toThrow('you are using the wrong JDK');
    expect(errors.wrongJDK).toThrow(/JDK/);
  })
});