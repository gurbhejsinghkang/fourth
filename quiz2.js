class Account {
    balance;
    constructor(initialbalance) {
        this.balance = initialbalance;
    }
    debit(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            return true;
        }
        else {
            console.log("Debit amount exceeded account balance");
            return false;
        }
    }
    credit(amount) {
        if (amount <= 0) {
            return false;
        }
        else {
            this.balance = this.balance + amount;
            return true;
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SavingAccount extends Account {
    interestRate;
    constructor(initialbalance, interestrate) {
        super(initialbalance);
        this.interestRate = interestrate;
    }
    calculateInterest() {
        var result = (this.interestRate / 100) * this.getBalance();
        this.credit(result);
        return result;
    }
}
class CheckingAccount extends Account {
    feeChargedPtra;
    constructor(initialbalance, fee) {
        super(initialbalance);
        this.feeChargedPtra = fee;
    }
    debit(amount) {
        if (super.debit()) {
            this.balance = this.getBalance() - this.feeChargedPtra;
        }
    }
    credit(amount) {
        if (super.credit()) {
            this.balance = this.getBalance() - this.feeChargedPtra;
        }
    }
}
let trans = new SavingAccount(100000, 2);
console.log("the balance before calculating interest=" + trans.getBalance());
console.log("the interest on ur initial balance will be " + trans.calculateInterest());
console.log("the balance after calculating interest=" + trans.getBalance());

// let trans = new Account(500);
// trans.debit(100);
// console.log(trans.getBalance());
// let trans2 = new SavingAccount(800, 2);
// trans2.balance = trans2.balance + trans2.calculateInterest();
// console.log(trans2.calculateInterest());
// // console.log(trans2.getBalance());
// let trans3 = new CheckingAccount(800, 2);
// trans3.debit(100);
// console.log(trans3.calculateInterest());
// console.log(trans3.getBalance());