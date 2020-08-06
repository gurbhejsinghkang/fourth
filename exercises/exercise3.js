var tip = new Array();
var totalbill = new Array();
function tipcal(bill) {
    if (bill < 50) {
        var tip = 0.2 * bill;
        tip.push(tip);
        var tbill = bill + tip;
        totalbill.push(tbill);
    }
    else if (bill >= 50 & bill <= 200) {
        var tip = 0.15 * bill;
        tip.push(tip);
        var tbill = bill + tip;
        totalbill.push(tbill);
    }
    else {
        var tip = 0.1 * bill;
        tip.push(tip);
        var tbill = bill + tip;
        totalbill.push(tbill);
    }
}
tipcal(124);
tipcal(48);
tipcal(268);
console.log(tip);
console.log(tip);