/*
🟡 Problem 2: Absolute Value Function
Difficulty: Medium

Description: Create a function that takes a number and returns its absolute value.

✨ Note: Using if statement makes the logic clearer, but Math.abs() is also acceptable.
*/

function getAbsolute(number) {
    if(number < 0) {
        return number * -1;
    } else {
        return number;
    }
}

const result = getAbsolute(-5);
console.log(result);