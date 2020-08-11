class Auto {
    startcar = false;
    constructor(model, cylinder) {
        this.model = model;
        this.cylinder = cylinder;
    }
    get modelType() {
        return this.model;
    }
    get numOfCylinders() {
        return this.cylinder;
    }
    start() {
        return "car is start now";
    }
    accelerate() {
        return "car speed is increased";
    }
    break() {
        return "break is applied";
    }
}

class Bmw extends Auto {
    startcar = false;
    constructor(name, model, cylinder) {
        super(model, cylinder);
        this.name = name;
        this.speed = 0;
    }
    get speddValue() {
        return this.speed;
    }
    get carName() {
        return this.name;
    }
    start() {
        if (this.startcar = false) {
            this.startcar = true;
            return "BMW is start now";
        }
        else {
            return "BMW is stopped now";
        }
    }
    accelerate() {
        this.speed = this.speddValue + 10;
        return "BMW is running at the of speed of " + this.speed + "m/hr";
    }
    break() {
        this.speed = 0;
        return "break is applied now";
    }
}

let i8 = new Bmw('Bmw', 'i8', '8');
console.log(i8.carName);
console.log(i8.modelType);
// console.log(i8.speddValue);
i8.accelerate();
i8.accelerate();
i8.accelerate();
console.log(i8.accelerate());