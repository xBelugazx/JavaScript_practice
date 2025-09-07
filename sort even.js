// 1부터 50까지 숫자 중 짝수만 출력(you can output even numbers)

// for문으로 1~50 돌리면서

// if문으로 짝수만 골라 출력

for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// This file contains an example that prints only even numbers from 1 to 50.


// quiz 2
for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) continue;

    for(let j = 0; j < 10; j++) {
        if(j % 2 === 0) continue;

        console.log(i, "*", j, "=", i * j);
    }
}

// output results except even numbers
