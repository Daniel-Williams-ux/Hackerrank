const cities = ["Manchester", "Liverpool", "Luton", "London"];
cities.pop();

module.exports = cities;

//test
const cities = require('./access);

test('removes the last element from the array', () => {
  const expectedArray = ["Manchester", "Liverpool", "Luton"]; // The array after pop()
  
  expect(cities).toEqual(expectedArray); // Check if the array matches the expected state
});
