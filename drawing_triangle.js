for(let i = 0; i < 5; i++) {
    console.log('*'.repeat(i + 1));
}

// 문자열.repeat()
// 조건에 따라 콘솔창에 찍어라
/**
 * ex) i = 0 -> '*'.repeat(0 + 1) 한 번 찍음
 *     i = 1 -> '*'.repeat(1 + 1) 두 번 찍음
 *     ...
 */
 
 
 // quiz 1
 for(let i = 5; i > 0; i--) {
    console.log('*'.repeat(i));
}

// quiz 2
for(let i = 0; i < 5; i++) {
    console.log('*'.repeat(5 - i));
}

// 5-0 5
// 5-1 4
// 5-2 3
// 5-3 2
// 5-4 1

/**
 * *****
 *  ****
 *   ***
 *    **
 *     *
 */

for(let i = 0; i < 5; i++) {
    console.log(' '.repeat(i) + '*'.repeat(5 - i));
}
