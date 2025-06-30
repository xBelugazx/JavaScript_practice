/*
🟡 Problem 3: String Length Comparison Function
Difficulty: Medium

Description: Create a function that takes two strings and returns the longer string.
If both strings have the same length, return either one.

✨ Note: Using if statements is recommended but not required.
*/

function longerString(str1, str2) {
    if(str1.length > str2.length) {
        return str1;
    } else if (str1.length === str2.length) {
        return Math.random() < 0.5 ? str1 : str2;
    } else {
        return str2;
    }
}   

// Test cases
console.log('Test 1:', longerString("apple", "banana"));     // banana (5 vs 6)
console.log('Test 2:', longerString("hello", "world"));      // equal length (5 vs 5)
console.log('Test 3:', longerString("javascript", "python")); // javascript (10 vs 6)
console.log('Test 4:', longerString("", "test"));           // test (0 vs 4)
console.log('Test 5:', longerString("cat", "dog"));         // equal length (3 vs 3)