const input = require("readline-sync");
let creditCard = String(input.question("\nNumber: "));
let productDigits = 0;
let sumDigits = Number(0);
while (creditCard > Number.MAX_SAFE_INTEGER || creditCard < 0 || Number.isNaN(creditCard) == true || creditCard%1!=0){
  creditCard = String(input.question("Number: "));
}
let length = String(creditCard).length;
for (let i = 0; i < length; i += 2){
  let x = (Number(String(creditCard).charAt(length - i - 2))*2);
  let lenx = String(x).length;
  (lenx > 1) ? x = Number(String(x).charAt(1))+Number(String(x).charAt(0)) : x = x;
  productDigits += x;
}
for (let i = 0; i < length; i += 2){
  sumDigits += Number(String(creditCard).charAt(length-i-1));
}
let creditCardNumbers = Number(productDigits) + Number(sumDigits);
let originalCredit = creditCard;
creditCard = String(creditCard).slice(0,2);
creditCardNumbers = String(creditCardNumbers).charAt(String(creditCardNumbers).length - 1);
if (creditCardNumbers == "0"){
  if ((Number(creditCard) == 37 || Number(creditCard) == 34) && String(originalCredit).length == 15){
    console.log("\nAmex.");
  }else if((Number(creditCard) >= 51 && Number(creditCard) <= 55) && String(originalCredit).length == 16){
    console.log("\nMastercard.");
  }else if((Number(creditCard) == 4) && (String(originalCredit).length == "16" || String(originalCredit).length == "13")){
    console.log("\nVisa.");
  }
}else{
  console.log("\nInvalid.")
}
