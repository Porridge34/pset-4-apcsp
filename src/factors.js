const input = require("readline-sync");
let integerEntered = Number(input.question("\nPositive integer: "));
let factors = "";
let factorTwo = 0;
while (integerEntered > Number.MAX_SAFE_INTEGER || integerEntered < 1 || Number.isNaN(integerEntered) == true || integerEntered%1!=0){
  integerEntered = Number(input.question("Positive integer: "));
}
for(var i = 1; i < integerEntered/2; i++){
  if(integerEntered % i == 0){
    factorsTwo = integerEntered/i;
    factors = String(factors) + String(i);
    if (i !== factorsTwo){
          factors = String(factors) + ", " + String(factorsTwo) + ", ";
    }else {
      i = integerEntered;
    }
  }
}
console.log("\n"+factors+".");
