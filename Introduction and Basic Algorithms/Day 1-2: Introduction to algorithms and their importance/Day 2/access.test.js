const boxes = require('./access');
describe('boxes function', () => {
  test('accesses the first element in the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = boxes(numbers);
    expect(result).toBe(1)
  })
})


const boxes = require('./path-to-your-function'); // Adjust the path accordingly

describe('boxes function', () => {
    test('accesses the first element of the array', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = boxes(numbers);
        expect(result).toBe(1);
    });

    test('accesses the first element of the first inner array', () => {
        const nestedNumbers = [[1, 2], [3, 4], [5, 6]];
        const result = boxes(nestedNumbers);
        expect(result).toBe(1);
    });
});
