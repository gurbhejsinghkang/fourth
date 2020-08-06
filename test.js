// function calculateage(birthyear) {
//     return 2020 - birthyear;
// }
// var ageSagar = calculateage(1996);
// console.log("my age is " + ageSagar);
//arrays

// var years = new Array(1990, 2000, 2001);
// console.log(name);
// console.log(years[2]);
// var name = ['sagar', 'gaurav'];
// name[name.length] = 'jonathan';
// console.log(name);
// name.push('harpreet');
// console.log(name);
// var singh = 3;   wrong declaration
job = 'teacher';
console.log(job);
var tip = new Array();
var totalbill = new Array();
console.log(tip.length);
function tipcal(bill) {
    if (bill < 50) {
        var ctip = 0.2 * bill;
        tip[tip.length] = ctip;
        var tbill = bill + ctip;
        totalbill[totalbill.length] = tbill;
    }
    else if (bill >= 50 & bill <= 200) {
        var ctip = 0.15 * bill;
        tip[tip.length] = ctip;
        var tbill = bill + ctip;
        totalbill[totalbill.length] = tbill;
    }
    else {
        var ctip = 0.1 * bill;
        tip[tip.length] = ctip;
        var tbill = bill + ctip;
        totalbill[totalbill.length] = tbill;
    }
}
tipcal(124);
tipcal(48);
tipcal(268);
console.log(tip);
console.log(totalbill);


console.log(1 + '2' + 1);
console.log(2 * '12');
console.log(3 * '3');
console.log(10 - true);
// console.log(5 * 'foo');