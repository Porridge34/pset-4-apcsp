const input = require("readline-sync");
let integerEntered = Number(input.question("\nPositive Integer: "));
let sum = 0;
while (integerEntered > Number.MAX_SAFE_INTEGER || integerEntered < Number.MIN_SAFE_INTEGER || Number.isNaN(integerEntered) == true || integerEntered%1!=0){
  integerEntered = Number(input.question("Positive Integer: "));
}
for (integerEntered; integerEntered > 0;){
  lastNumber = integerEntered%10;
  integerEntered = (integerEntered-integerEntered%10)/10;
  if (lastNumber%2!=0){
    sum=sum+lastNumber;
  }
}
console.log("\n"+sum+".");
