let john = {
    firstname: 'John',
    lastname: 'dwayne',
    mass: 50,
    height: 1.8,
    bmi: 0,
    calbmi: function () {
        this.bmi = 50 / (this.height * this.height);
        return "the bmi of john is " + this.bmi;
    }
}
let mark = {
    firstname: 'mark',
    lastname: 'junior',
    mass: 60,
    height: 1.6,
    bmi: 0,
    calbmi: function () {
        this.bmi = 50 / (this.height * this.height);
        return "the bmi of john is " + this.bmi;
    }
}

console.log(john.calbmi());
console.log(mark.calbmi());
if (john.bmi > mark.bmi) {
    console.log("full name:" + john.firstname + " " + john.lastname + " and bmi=" + john.bmi);
}
else if (john.bmi < mark.bmi) {
    console.log("full name:" + john.firstname + " " + john.lastname + " and bmi=" + john.bmi);
}
else {
    console.log("both have same bmi and it is euqal to " + john.bmi);
}