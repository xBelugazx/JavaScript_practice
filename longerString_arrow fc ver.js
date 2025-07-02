/*
🟡 Problem 3: String Length Comparison Function
Difficulty: Medium

Description: Create a function that takes two strings and returns the longer string.
If both strings have the same length, return either one.

✨ Note: Using if statements is recommended but not required.
*/

const longerString = (str1, str2) => {
    let str1_length = str1.length;
    let str2_length = str2.length;

    if(str1_length > str2_length) {
        return str1;
    } else if(str1_length === str2_length) {
        return Math.random() < 0.5 ? str1 : str2;
    } else {
        return str2;
    }
}

console.log(longerString('banana', 'path'));
// Test cases
console.log(longerString('hello', 'world'));     // same length (5)
console.log(longerString('hi', 'javascript'));   // different length (2 vs 10)
console.log(longerString('cat', 'dog'));         // same length (3)
console.log(longerString('', 'test'));           // empty string test