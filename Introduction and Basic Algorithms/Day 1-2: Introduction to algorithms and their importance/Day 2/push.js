const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");

module.exports = cities

//test
const cities = require('./access');

test('removes the last element from the array', () => {
  const expectedArray = ["Manchester", "Liverpool", "Cardiff"]; // The array after pop()
  
  expect(cities).toEqual(expectedArray); // Check if the array matches the expected state
});


//The new length of the array is returned when the method call completes. If you wanted to store the new array length in a variable, 
//you could do something like this:

const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3
