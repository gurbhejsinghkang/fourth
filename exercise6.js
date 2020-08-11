console.log("hello");

function ATM(accountno) {
    var balance = 0;
    var msg;
    return {
        deposit: function (money) {
            if (money > 0) {
                balance = balance + money;
                console.log("deposit is successful");
            }
        },
        withdrawl: function (money) {
            if (money > 0) {
                if (money <= balance) {
                    balance = balance - money;
                    console.log("Collect ur money from the slot");
                }
            }
        },
        getresult: function () {
            return "account no " + accountno + "\nbalance is " + balance;
        }
    }
}

var rel = ATM(100);
rel.deposit(1000);
console.log(rel.getresult());
var rel1 = ATM(100);
rel1.deposit(1000);
rel1.withdrawl(1000);
console.log(rel1.getresult());
var rel2 = ATM(100);
rel2.withdrawl(1000);
console.log(rel2.getresult());






