/*
✅ Problem: Create a Student Attendance Management System
Requirements:
1. Manage multiple student information as objects
2. Each student should have: name, age, and attendance status (true/false)
3. Create a list of students as an array
4. Implement two functions:
   - printPresentStudents(): Print names of students who are present
   - warnAbsentStudents(): Print "OOO, please attend class!" for absent students

This problem utilizes the following concepts:
- Objects: Managing individual student information
- Arrays: Managing multiple students
- Conditionals: Checking attendance status
- Loops: Iterating through the array
- Functions: Creating reusable code structures
*/

const students = [
    { name: "John", age: 20, present: true },
    { name: "Jane", age: 21, present: false },
    { name: "Tom", age: 19, present: true },
    { name: "Emily", age: 22, present: false }
];

// Function to print the names of present students
function printPresentStudents(studentList) {
    for(let i = 0; i < studentList.length; i++) {
        if(studentList[i].present === true){
            console.log(`${studentList[i].name}`);
        }
    }
}

// Function to warn absent students
function warnAbsentStudents(studentList) {
    for(let i = 0; i < studentList.length; i++) {
        if(studentList[i].present === false){
            console.log(`${studentList[i].name}, please attend class!`);
        }
    }
}

// Execute the functions
printPresentStudents(students);
warnAbsentStudents(students);