const aVeryBigSum = require('./aVeryBigSum');

test('adds 1000000001, 1000000002, 1000000003, 1000000004 and 1000000005 to equal 5000000015', () => {
  const result = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
  expect(result).toBe(5000000015);
});
