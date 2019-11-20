const input = require("readline-sync");
let creditCard = Number(input.question("\nNumber: "));
let productDigits = 1;
let sumDigits = Number(0);
while (creditCard > Number.MAX_SAFE_INTEGER || creditCard < 0 || Number.isNaN(creditCard) == true || creditCard%1!=0){
  creditCard = Number(input.question("Number: "));
}
let creditArray = Array.from(String(creditCard), Number);
console.log(creditArray);
for (let i = 1; i < creditArray.length; i=Number(i)+Number(2)){
  console.log(Number(creditArray[Number(creditArray.length)-i]));
  productDigits = Number(creditArray[Number(creditArray.length)-i])*productDigits;
  sumDigits = Number(creditArray[Number(creditArray.length)-i+1]) + sumDigits;
}
let creditCardNumbers = Number(productDigits) + Number(sumDigits);
creditCard = String(creditCard).slice(0,1);
console.log(creditCardNumbers);
if (creditCardNumbers == 0){
  if ((creditCard == 37 || creditCard == 34) && creditCard.length() == 15){
    console.log("\nAmerican Express.");
  }else if((creditCard >= 51 && creditCard <= 55) && creditCard.length() == 16){
    console.log("\nMastercard.")
  }else if((creditCard == 4) && (creditCard.length() == 16 || creeditCard.length() == 15)){
    console.log("\nVisa.")
  }
}else{
  console.log("\nInvalid.")
}
