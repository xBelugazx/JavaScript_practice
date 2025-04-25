// Imagine creating an automatic lunch time notification system at the company.
// Check if it's lunch time based on the current time,
// and suggest a menu according to the day of the week. This is a very simple program.

let currentTime = 13.5;  // For representing 30 minutes, use .5 (e.g., 13.5 means 13:30)
let date = 'monday';

let lunchTime = ((currentTime >= 12) && (currentTime <= 13)) ? true : false;

if (lunchTime === true) {
    console.log('It\'s time for lunch.');

    switch(date) {
        case 'monday':
            console.log('Today menu is hamburger');
            break;
        case 'tuesday':
            console.log('Today menu is pizza');
            break;
        case 'wednesday':
            console.log('Today menu is pasta');
            break;
        case 'thursday':
            console.log('Today menu is sushi');
            break;
        case 'friday':
            console.log('Today menu is bibimbap');
            break;
        default:
            console.log('Weekend! Choose whatever you want!');
    }
} else {
    console.log('It\'s not lunch time yet.');
}
