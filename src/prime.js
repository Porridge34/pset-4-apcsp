const input = require("readline-sync");
let integerEntered = Number(input.question("\nNon-negative: "));
let sum = 0;
while (integerEntered > Number.MAX_SAFE_INTEGER || integerEntered < Number.MIN_SAFE_INTEGER || Number.isNaN(integerEntered) == true || integerEntered%1!=0){
  integerEntered = Number(input.question("Non-negative: "));
}
for(var i = 2; i < integerEntered; i++){
  if(integerEntered % i === 0){

  }
}


console.log("\n"+sum+".");
