
// Complete the simpleArraySum function in the editor below. It must return the sum of the array 
// elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers
// Input Format

// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.

// Constraints


// Output Format

// Print the sum of the array's elements as a single integer.

// Sample Input

// 6
// 1 2 3 4 10 11
// Sample Output

// 31

const sumTotal = (num) => {
    let sum = 0;
    
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    
    return sum;
}


const arr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const output = sumTotal(arr);
console.log(output);//20