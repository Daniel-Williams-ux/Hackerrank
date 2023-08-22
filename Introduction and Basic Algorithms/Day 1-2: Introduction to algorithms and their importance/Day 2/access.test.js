const boxes = require('./access');
describe('boxes function', () => {
  test('accesses the first element in the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = boxes(numbers);
    expect(result).toBe(1)
  })
})
