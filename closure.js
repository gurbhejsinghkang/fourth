function interviewQuestion(job) {
    return function (name) {
        if (job == 'designer') {
            console.log(name + ', can you explain what web designing is?');
        }
        else if (job == 'teacher') {

            console.log('what subject do u teaching ' + name + '?');
        }
        else {

            console.log('what subject do u teach' + name + '?');
        }
    }
}

interviewQuestion('designer')('sagar');
interviewQuestion('teacher')('sagar');
interviewQuestion('teach')('sagar');

const obj = { firstName: 'sagar', lastName: 'fashion' };
console.log(obj.firstName);
console.log(obj.lastName);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);


function addFourAges(a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(30, 12, 14, 15);
const sum2 = addFourAges(...addFourAges);
console.log(sum2);



//another example of spread operator
const familySingh = ['jaboor', 'jane', 'jonathan'];
const familyKaur = ['Asmita', 'Gaurav', 'Akash'];
const bigFamily = [...familySingh, 'Sagar', ...familyKaur];
console.log(bigFamily);


function isFullAge() {
    years.forEach(function (current) {
        console.log((2020 - current) >= 18);
        console.log(current);
    });
}





