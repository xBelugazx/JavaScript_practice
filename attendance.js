// Attendance Check System

// Loop through the name list

// If the name is "John", print "John is exempt from attendance" and continue

// For others, print "Attendance check complete"


let nameArray = [
    'Alex',
    'James',
    'Hong',
    'Karol',
    'John',
    'Jack',
    'Tina',
];

for(let i = 0; i < nameArray.length; i++) {
    if(nameArray[i] === 'John') {
        console.log('John is exempt from attendance.');
        continue;
    }
    console.log(`${nameArray[i]}: Attendance check complete`);
}
