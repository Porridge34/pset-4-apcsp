const input = require("readline-sync");
let integerEntered = 0;
let firstIntegerEntered = NaN;
let sum = 0;
let count = 1;
console.log();
while (firstIntegerEntered > Number.MAX_SAFE_INTEGER || firstIntegerEntered < Number.MIN_SAFE_INTEGER ||
  Number.isNaN(firstIntegerEntered) == true || firstIntegerEntered%1!=0 || firstIntegerEntered < 0){
  firstIntegerEntered = Number(input.question("Non-negative Integer: "));
}
sum = sum + firstIntegerEntered
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
