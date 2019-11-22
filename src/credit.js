const input = require("readline-sync");
let creditCard = Number(input.question("\nNumber: "));
let productDigits = 1;
let sumDigits = Number(0);
while (creditCard > Number.MAX_SAFE_INTEGER || creditCard < 0 || Number.isNaN(creditCard) == true || creditCard%1!=0){
  creditCard = String(input.question("Number: "));
}
for (let i = 0; i < String(creditCard).length - 1; i = (i + 2)){
  productDigits = (Number(String(creditCard).charAt(String(creditCard).length - i - 1))*2) + productDigits;
  console.log(String(creditCard).charAt(String(creditCard).length - i - 1));
}
console.log("\n"+productDigits);
for (let i = 1; i < String(creditCard).length - 1; i = (i+2)){
  (String(creditCard).charAt(String(creditCard).length-i))sumDigits = Number(String(creditCard).charAt(String(creditCard).length-i)) + sumDigits;
  console.log(String(creditCard).charAt(String(creditCard).length-i));
}
console.log(sumDigits);
let creditCardNumbers = Number(productDigits) + Number(sumDigits);
let originalCredit = creditCard;
creditCard = String(creditCard).slice(0,1);
console.log(creditCardNumbers);
console.log("CreditCard is " + creditCard);
creditCardNumbers = String(creditCardNumbers).charAt(String(creditCardNumbers).length - 1);
if (creditCardNumbers == "0"){
  if ((creditCard == 37 || creditCard == 34) && String(originalCredit).length == 15){
    console.log("\nAmerican Express.");
  }else if((creditCard >= 51 && creditCard <= 55) && String(originalCredit).length == 16){
    console.log("\nMastercard.");
  }else if((Number(creditCard) == 4) && (String(originalCredit).length == "16" || String(originalCredit).length == "15")){
    console.log("\nVisa.");
  }
}else{
  console.log("\nInvalid.")
}
