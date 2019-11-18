const input = require("readline-sync");
let integerEntered = Number(input.question("\nNon-negative integer: "));
let prime = "Prime";
while (integerEntered > Number.MAX_SAFE_INTEGER || integerEntered < 0 || Number.isNaN(integerEntered) == true || integerEntered%1!=0){
  integerEntered = Number(input.question("Non-negative integer: "));
}
for(var i = 2; i < integerEntered; i++){
  if(integerEntered % i === 0){
    prime = "Not prime";
  }else if(integerEntered == 1 || integerEntered == 2){
    prime = "Prime";
  }
}
console.log("\n"+prime+".");
