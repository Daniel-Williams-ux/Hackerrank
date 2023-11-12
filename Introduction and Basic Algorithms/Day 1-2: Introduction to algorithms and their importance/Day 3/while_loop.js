
//1. Beginner:

//Create a while loop that prints numbers from 1 to 5.

let i = 1;
while (i < 4) {
    console.log(i);
    i++;
}

//2. Beginner: 
//Write a while loop to calculate the sum of numbers from 1 to 10.

let i = 1;
let sum = 0;

while (i <= 10) {
    sum += i;
    i++;
}

console.log("The sum of numbers from 1 to 10 is: " + sum);

//Intermediate
// 3. Construct a while loop that prompts the user to enter numbers until they enter a negative number. 
//Calculate the sum of all positive numbers entered.
let sum = 0;
let number = 0;

while (number >= 0) {
    number = parseFloat(prompt("Enter a number:"));

    if (number >= 0) {
        sum += number;
    }
}

console.log("The sum of positive numbers entered is: " + sum);*/
//The prompt function is typically used in a browser environment for taking user input. 
//In a Node.js environment (running JavaScript on your computer rather than a browser), 
//you can utilize the readline module to take user input.


//Here, we're using Node.js's built-in module called readline. 
//This module allows us to read input from the terminal (where you type commands).

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Initializing Variables
//We're initializing two variables: sum to keep track of the sum of positive numbers 
//and number to store the input from the user.
let sum = 0;
let number = 0;

//We create a function called getNumber that will prompt the user to enter a number.
const getNumber = () => {
    rl.question('Enter a number: ', (input) => {
        number = parseFloat(input);
        if (number >= 0) {
            sum += number;
            getNumber();
        } else {
            console.log("The sum of positive numbers entered is: " + sum);
            rl.close();
        }
    });
};

getNumber();
