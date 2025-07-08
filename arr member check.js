/*
Problem: Array Member Check
Check if 'Karina' exists in the aespa array
Print "There is Karina" if found
Print "There is no Karina" if not found
*/

let aespa = [
    'Ningning',
    'Karina',
    'Giselle',
    'Winter'
];

let found = false;
for(let i = 0; i < aespa.length; i++) {
    if(aespa[i] === 'Karina') {
        found = true;
        break;
    }
}

if(found) {
    console.log('There is Karina');
} else {
    console.log('There is no Karina');
}