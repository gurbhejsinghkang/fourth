// var park = { firstpark: 2012, secondpark: 2013, thirdpark: 2014 };
class park {
    name;
    buildYear;
    numOfTrees;
    parkArea;
    ageOfPark;
    constructor(pname, buildyear, numoftrees, parkarea, ageofpark) {
        this.name = pname;
        this.buildYear = buildyear;
        this.numOfTrees = numoftrees;
        this.parkArea = parkarea;
        this.ageOfPark = ageofpark;
    }
    treeDensity() {
        console.log("Tree density of park " + this.name + "=" + this.numOfTrees / this.parkArea + " tree per square meter");
    }
}

class street {
    name;
    buildYear;
    lengthOfStreet;
    type;
    constructor(sname, buildyear, lengthofstreet, stype) {
        this.name = sname;
        this.buildYear = buildyear;
        this.lengthOfStreet = lengthofstreet;
        this.type = stype;
    }
}

let p1 = new park("Juliet", 2000, 300, 400, 20);
p1.treeDensity();
let p2 = new park("Harriot", 1996, 1200, 800, 24);
p2.treeDensity();
let p3 = new park("karry", 1990, 800, 400, 30);
p3.treeDensity();
console.log("The average age of parks in the town is " + ((p1.ageOfPark + p2.ageOfPark + p3.ageOfPark) / 3));
if (p1.numOfTrees > p2.numOfTrees && p1.numOfTrees > p3.numOfTrees) {
    console.log("The name of the park that has more than 1000 trees is " + p1.name);
}
else if (p2.numOfTrees > p1.numOfTrees && p2.numOfTrees > p3.numOfTrees) {
    console.log("The name of the park that has more than 1000 trees is " + p2.name);
}
else {
    console.log("The name of the park that has more than 1000 trees is " + p3.name);
}

let s1 = new street('Catherine', 1990, 3, 'normal');
let s2 = new street('Victoria', 1992, 5, 'big');
let s3 = new street('Provost', 1994, 4, 'normal');
let s4 = new street('Remembrance', 1996, 6, 'huge');
console.log("The total length of the town street is " + (s1.lengthOfStreet + s2.lengthOfStreet
    + s3.lengthOfStreet + s4.lengthOfStreet));
console.log("The total length of the town street is " + ((s1.lengthOfStreet + s2.lengthOfStreet
    + s3.lengthOfStreet + s4.lengthOfStreet) / 4));
console.log("The street type of " + s1.name + " street is " + s1.type);
console.log("The street type of " + s2.name + " street is " + s2.type);
console.log("The street type of " + s3.name + " street is " + s3.type);
console.log("The street type of " + s4.name + " street is " + s4.type);



