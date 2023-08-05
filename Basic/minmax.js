/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

The numbers are , , , , and . Calculate the following sums using four of the five integers:

Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Hints: Beware of integer overflow! Use 64-bit Integer.
*/

function miniMaxSum(arr) {
    const totalSum = arr.reduce((acc, sum) => acc + sum, 0);
    const minSum = totalSum - Math.max(...arr);
    const maxSum = totalSum - Math.min(...arr);
    console.log(minSum, maxSum);
}
// Input the array of five positive integers
const inputArr = [1, 2, 3, 4, 5];//10 14

// Call the function to calculate and print the minimum and maximum sums
miniMaxSum(inputArr);

/*
Explanation:

The function miniMaxSum takes an array arr as input, which contains five positive integers.
Using the reduce method, totalSum is calculated by summing all the elements in the array.
The minimum sum (minSum) is calculated by subtracting the maximum element of the array from the totalSum.
The maximum sum (maxSum) is calculated by subtracting the minimum element of the array from the totalSum.
Finally, the function prints the minimum and maximum sums to the console.
When you run this JavaScript code, it will output the respective minimum and maximum sums that can be calculated by summing exactly four of the five integers. 
In this example, the output will be:
*/

/*In JavaScript, (...arr) is known as the "spread syntax" or "rest syntax," depending on how it is used. 
It allows you to convert an array into a list of arguments or to gather multiple function arguments into an array.

Spread Syntax: Converting an Array to Individual Arguments
When used in a function call, the spread syntax can be used to pass the elements of an array as individual arguments to the function. 
Here's an example:
*/
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const sum = add(...numbers); // Equivalent to add(1, 2, 3)
console.log(sum); // Output: 6

/*
In this example, the numbers array is spread using ...numbers, and its elements (1, 2, and 3) are passed as individual arguments to the add function. 
This is equivalent to calling add(1, 2, 3), and the function returns the sum of the three numbers.

Rest Syntax: Gathering Function Arguments into an Array
When used in a function definition, the spread syntax can be used to gather multiple function arguments into an array. 
This is referred to as "rest syntax." Here's an example:
*/
function multiply(...numbers) {
  let result = 1;
  for (const num of numbers) {
    result *= num;
  }
  return result;
}

const product = multiply(2, 3, 4); // Equivalent to multiply(2, 3, 4)
console.log(product); // Output: 24

/*In this example, the function multiply uses ...numbers in its parameter list. This allows the function to accept any number of arguments, 
and it gathers all the arguments into the numbers array. Inside the function, we can then loop through the numbers array and calculate the product of all the arguments.

In summary, (...arr) is a versatile syntax in JavaScript that can be used to spread an array into individual arguments or to gather 
multiple function arguments into an array, depending on where it is used.
*/