/*
Question: Two Sum
Problem:
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

def two_sum(nums, target):
    # Your code here
    pass

*/

function two_numbers(nums, target) {
    let output = [];

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            
            if (sum === target) {
                output.push([i, j]);
            }
        }
    }

    return output;
}

const num = [2, 7, 11, 15];
const target = 9;
const result = two_numbers(num, target);

console.log(result);
