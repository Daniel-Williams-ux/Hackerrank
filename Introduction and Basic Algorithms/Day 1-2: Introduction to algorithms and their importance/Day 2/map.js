//Sometimes you will want to do the same thing to each item in an array, leaving you with an array containing the changed items. 
//You can do this using map(). The code below takes an array of numbers and doubles each number:

function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
