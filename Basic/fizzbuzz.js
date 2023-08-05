// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number

// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i < answer; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }


function fizzBuzz(arr) {
    let result = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            result.push('FizzBuzz');
        } else if (arr[i] % 3 === 0) {
            result.push('Fizz');
        } else if (arr[i] % 5 === 0) {
           result.push('Buzz')
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

const num = [1, 3, 5, 2, 15, 5, 30];
const output = fizzBuzz(num);
console.log(output);