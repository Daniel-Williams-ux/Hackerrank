// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those 
// integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// long: the sum of all array elements
// Input Format

// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// Output Format

// Return the integer sum of the elements in the array.

// Constraints


// Sample Input

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output

// 5000000015
// Note:

// The range of the 32-bit integer is .
// When we add several integer values, the resulting sum might exceed the above range. 
// You might need to use long int C/C++/Java to store such sums.

function aVeryBigSum(ar) {
    return ar.reduce((num, sum) => num + sum, 0)
}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const result = aVeryBigSum(ar);
console.log(result);//5000000015

// In this solution, the aVeryBigSum function takes an array ar as input and uses the 
// reduce method to calculate the sum of all the elements in the array. The reduce method 
// iterates over the array, accumulating the sum by adding each element to the sum variable. 
// The initial value of sum is set to 0. Finally, the result is logged to the console using 
// console.log.

// Note that JavaScript uses 64-bit floating-point numbers, which can accurately represent integers up to Number.MAX_SAFE_INTEGER (2^53 - 1). If the integers in the array are larger than that, you might need to use a library like BigInt to handle arbitrary precision arithmetic.
