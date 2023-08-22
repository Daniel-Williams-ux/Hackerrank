function boxes(arr) {
    return arr[1]; // Access the first element of the array
}

const numbers = [1, 2, 3, 4, 5];
const result = boxes(numbers);
console.log(result); // Should log: 2


function boxes(arr) {
  for(let i = 0; i < arr.length; i++) {
     return arr[0]
  }
}

const numbers = [1, 2, 3, 4, 5];
const result = boxes(numbers);
console.log(result); // Should log: 1

function boxes(arr) {
  for(let i = 0; i < arr.length; i++) {
     return arr[0][0]
  }
}

const numbers = [[1, 2], [3, 4], [5, 6]];
const result = boxes(numbers);
console.log(result); // Should log: 1
