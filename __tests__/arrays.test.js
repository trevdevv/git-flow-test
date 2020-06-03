// importing the javascript function
const list = require("../src/arrays");

describe("Array Tests", () => {
  test('the shopping list has beer on it', () => {
    expect(list.shopping).toContain('beer');
    expect(new Set(list.shopping)).toContain('beer');
  })
});