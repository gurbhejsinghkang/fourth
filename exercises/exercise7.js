class rates {
    firstName;
    lastName;
    yearOfBirth;
    currentYear;
    constructor(firstname, lastname, yearofbirth, currentyear) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.yearOfBirth = yearofbirth;
        this.currentYear = currentyear;
    }
    set setFirstName(fname) {
        this.firstName = fname;
    }
    get getFirstName() {
        return this.firstName;
    }
    set setLastName(lname) {
        this.lastName = lname;
    }
    get getLastName() {
        return this.lastName;
    }
    set setYearOfBirth(year) {
        this.yearOfBirth = year;
    }
    get getYearOfBirth() {
        return this.yearOfBirth;
    }
    set setCurrentYear(year) {
        this.currentYear = year;
    }
    get getCurrentYear() {
        return this.currentYear;
    }
    age() {
        return this.currentYear - this.yearOfBirth;
    }

}