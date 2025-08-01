class Monster{
    atk;
    def;

    constructor(atk, def){
        this.atk = atk;
        this.def = def;
    }
}

const blueEyes = new Monster(3000, 2500);
console.log(blueEyes);

const dragonKnight = new Monster(2000, 1200);
console.log(dragonKnight);

const neos = new Monster(2500, 2000);
console.log(neos);

// 객체처럼 인스턴스에서 값을 가져오기
console.log(blueEyes.atk); // 3000
console.log(blueEyes.def); // 2000
