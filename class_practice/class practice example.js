// the way how makes normal value to instance
class Human{
    height = 178;
    weight = 78;
}

const stranger = new Human();
console.log(stranger);

// However, I'd like to make new instances(like new unit)

class Skills{
    // set valuable's name
    atk;
    def;

    constructor(atk, def) {
        this.atk = atk;
        this.def = def;
    }
}

const archer = new Skills(150, 10);
console.log(archer);
