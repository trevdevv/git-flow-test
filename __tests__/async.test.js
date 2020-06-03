// importing the javascript function
const fetchData = require("../src/async");

// describe('Testing async code', () => {
//   test('the data is peanut butter', done => {
//     function callback(data) {
//       try {
//         expect(data).toBe('peanut butter');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     }
//     fetchData(callback);
//   })
// });

describe('Testing promises', () => {
  test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data.text).toBe('peanut butter');
    });
  });
})