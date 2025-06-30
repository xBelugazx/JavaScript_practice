/*
✅ Problem: Even/Odd Number Checker
Difficulty: Easy

Description:
Given a number n, check each number from 1 to n and print:
"X is even" for even numbers
"X is odd" for odd numbers
*/

let number = 7;

for(let i = 1; i <= number; i++) {
    if(i % 2 === 0) {
        console.log(`${i} is even `);
    } else {
        console.log(`${i} is odd`);
    }
}