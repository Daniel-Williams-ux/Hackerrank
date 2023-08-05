// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each
// fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  
// are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zerCount = 0;
    
    // Count the positive, negative, and zero elements
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
             zerCount++;
        }
    }
    
    // Calculate the ratios
    const positiveRatio = positiveCount/n;
    const negativeRatio = negativeCount/n;
    const zeroRatio = zerCount/n;
    
     // Print the ratios with the required precision
     console.log(positiveRatio.toFixed(6));
     console.log(negativeRatio.toFixed(6));
     console.log(zeroRatio.toFixed(6));
     
// 0.500000
// 0.333333
// 0.166667
}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);