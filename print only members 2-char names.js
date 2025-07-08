// ✅ Problem 2: Print only members with 2-character names from the array
// Expected output: "닝닝", "지젤", "윈터"

const members = [
    '닝닝',
    '카리나',
    '지젤',
    '윈터',
];

for(let member of members) {
    if(member.length === 2) {
        console.log(member);
    }
}