class Animal {
    name;

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log("Some sound");
    }
}

class Dog extends Animal{
    speak() {
        console.log("Woof!");
    }
}

const d = new Dog("Buddy");
d.speak();
