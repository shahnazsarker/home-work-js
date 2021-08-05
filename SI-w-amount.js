/*Simple Interest Calculation with function */

function amount(principal, interest, time) {
    console.log("Principal", principal, "Interest Rate", interest, "Time taken", time);
    var totalAmount = principal * (1 + interest * time);
    var totalSI = principal * interest * time;
    return [totalAmount, totalSI];

}
var amountRecieved = amount(100, 4, 2);

console.log("Your total amount & SI are-", amountRecieved);