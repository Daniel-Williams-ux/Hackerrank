const cities = ["Manchester", "Liverpool", "Luton", "London"];
cities.pop();

module.exports = cities;

//test
const cities = require('./access);

test('removes the last element from the array', () => {
  const expectedArray = ["Manchester", "Liverpool", "Luton"]; // The array after pop()
  
  expect(cities).toEqual(expectedArray); // Check if the array matches the expected state
});


/*The distinction between toEqual and toBe is important when it comes to Jest testing.

toBe: This matcher is used for primitive data types like numbers, strings, and booleans. It performs a strict equality check using 
the === operator. It checks if two values are the same instance in memory as well as having the same value. However, for arrays
and objects, using toBe might not give you the expected results, as it checks for reference equality, not structural equality.

toEqual: This matcher is used for comparing objects, arrays, and other complex data structures. It performs a deep equality
check, which means it compares the values of the properties within objects and arrays, rather than checking if they're the same 
instance in memory.

In your specific test case, you're testing whether the array after calling cities.pop() matches the expected array with the last 
element removed. Since you're comparing arrays (which are objects) and not primitive values, using toBe won't work as expected, because it will check for reference equality, not whether their contents are equal.

So, when comparing arrays, objects, or other complex data structures, it's more appropriate to use toEqual because it performs a 
deep equality check. In contrast, toBe is better suited for simple primitive values like strings, numbers, and booleans.*/


/*The pop() method returns the item that was removed. To save that item in a new variable, you could do this:*/
const cities = ["Manchester", "Liverpool"];
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"
