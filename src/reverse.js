const input = require("readline-sync");
let integerEntered = Number(input.question("\nPositive Integer: "));
let lastNumber = NaN;
while (integerEntered > Number.MAX_SAFE_INTEGER || integerEntered <= 1 || Number.isNaN(integerEntered) == true){
  integerEntered = Number(input.question("\nPositive Integer: "));
}
for (let i = integerEntered; i > 0; i--){
  let constantThing = 1;
  lastNumber = Math.floor(integerEntered/constantThing);
  console.log(lastNumber + ", ");
  constantThing = constantThing*10;
}
