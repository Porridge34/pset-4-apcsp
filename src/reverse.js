const input = require("readline-sync");
let integerEntered = Number(input.question("\nPositive Integer: "));
let lastNumber = 0;
let stringThing = "";
while (integerEntered > Number.MAX_SAFE_INTEGER || integerEntered < 1 || Number.isNaN(integerEntered) == true || integerEntered%1!=0){
  integerEntered = Number(input.question("Positive Integer: "));
}
for (integerEntered; integerEntered > 0;){
  lastNumber = integerEntered%10;
  stringThing = stringThing + lastNumber + ", ";
  integerEntered = (integerEntered-integerEntered%10)/10;
}
console.log("\n"+stringThing);
