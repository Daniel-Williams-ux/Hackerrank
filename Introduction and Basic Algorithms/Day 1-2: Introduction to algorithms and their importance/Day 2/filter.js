//Sometimes you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter(). 
//The code below takes an array of strings and returns an array containing just the strings that are greater than 8 characters long:
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
