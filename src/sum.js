const input = require("readline-sync");
let lowerBound = Number(input.question("\nLower bound: "));
let upperBound = Number(input.question("Upper bound: "));
let sum = 0;
while (Number.isNaN(lowerBound) == true || Number.isNaN(upperBound) == true || lowerBound > upperBound || lowerBound > Number.MAX_SAFE_INTEGER || lowerBound < Number.MIN_SAFE_INTEGER
  || upperBound > Number.MAX_SAFE_INTEGER || upperBound < Number.MIN_SAFE_INTEGER){
  lowerBound = Number(input.question("Lower bound: "));
  upperBound = Number(input.question("Upper bound: "));
}
sum = (lowerBound%2==0)? sum = lowerBound : sum = lowerBound+1;
for (let i = Math.ceil((upperBound-lowerBound)/2); i > 1; i--){
  sum = Number(sum) + Number((lowerBound%2==0)? lowerBound = Number(lowerBound)+2 : lowerBound = Number(lowerBound)+3);
}
console.log("\n"+sum.toLocaleString()+".");
