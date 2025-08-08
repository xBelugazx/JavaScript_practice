class BankAccount{
    owner;
    balance;

    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        return this.balance = this.balance + amount;
    }

    withdraw(amount) {
        if(this.balance >= amount) {
            this.balance = this.balance - amount;
        } else {
            console.log("Insufficient funds");
        }

        return this.balance;
    }
}

const myAccount = new BankAccount('Alex', 100);

console.log(myAccount.deposit(50));   // 150
console.log(myAccount.withdraw(200)); // "Insufficient funds" → 150
console.log(myAccount.withdraw(80));  // 70