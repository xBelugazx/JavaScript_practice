// Arrow function with if-else
const getGrade = (grade) => {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Switch statement for printing grades
const grade = 'B';
switch(grade) {
    case 'A':
        console.log('Perfect!');
        break;
    case 'B':
        console.log('Good!');
        break;
    case 'C':
        console.log('Not bad');
        break;
    case 'D':
        console.log('You need to study more');
        break;
    case 'F':
        console.log('Failed');
        break;
    default:
        console.log('Invalid grade');
}

// Test if-else function
console.log('Grade result:', getGrade(81));  // Should print: B