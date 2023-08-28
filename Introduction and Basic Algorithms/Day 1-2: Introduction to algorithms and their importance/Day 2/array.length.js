function getArrayLength(arr) {
  return arr.length;
}

module.exports = getArrayLength;

//test
const getArrayLength = require('./access');

describe('boxes function', () => {
  test('accesses the length of the array', () => {
    const nums = [0, 1, 2, 3, 4];
    const result = getArrayLength(nums);
    expect(result).toBe(5);
  });
});
