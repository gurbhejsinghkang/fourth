function student(first) {
    this.firstName = first;
    this.hello = function () {
        console.log('hello' + this.firstName);
    }
}
let student1 = new student('joe');
console.log(student1.firstName);
student1.hello();

class Person {
    #firstName;
    #lastName;
    constructor(first, last) {
        this.firstname = first;
        this.lastName = last;
    }
    hello() {
        console.log("hello " + this.firstname + " from our class person");
    }
}

class student extends Person {
    constructor(first, last, major) {
        super(first, last);
        this.major = major;
        this.tuitionPaid;
    }
    get getPayment() {
        if (this.tuitionPaid >= 100) {
            console.log("the amount you paid is " + this.tuitionPaid);
        }
    }
    set setPayment(amount) {
        if (amount >= 100) {
            this.tuitionPaid = amount;
        }
        else {
            console.log("the tuition paid must be greater than 100");
        }
    }
}

