const input = require("readline-sync");
let integerEntered = Number(input.question("\nPositive integer: "));
let fibonacci = 1;
let previousNumber = 0;
let previousNumber2 = 1;
while (integerEntered > 78 || integerEntered < 1 || Number.isNaN(integerEntered) == true || integerEntered%1!=0){
  integerEntered = Number(input.question("Positive integer: "));
}
for(var i = 0; i < integerEntered; i++){
  fibonacci = previousNumber2 + previousNumber;
  previousNumber2 = previousNumber;
  previousNumber = fibonacci;
}
console.log("\n"+fibonacci.toLocaleString()+".");
