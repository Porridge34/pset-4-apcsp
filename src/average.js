const input = require("readline-sync");
let integerEntered = 0;
let sum = 0;
let count = 0;
console.log();
while (integerEntered >= 0){
  integerEntered = Number(input.question("Non-negative Integer: "));
  if(integerEntered > Number.MAX_SAFE_INTEGER || integerEntered < Number.MIN_SAFE_INTEGER ||
    Number.isNaN(integerEntered) == true || integerEntered%1!=0 || integerEntered < 0){
    sum=sum
  }else{
    sum=integerEntered+sum;
    count++;
  }
}
console.log("\n"+(sum/count).toLocaleString(undefined, { minimumFractionDigits: 3 })+".");
