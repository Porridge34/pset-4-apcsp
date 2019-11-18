const input = require("readline-sync");
let height = Number(input.question("\nHeight: "));
let output = [];
while (height > 24 || height < 1 || Number.isNaN(height) == true || height%1!=0){
  height = Number(input.question("Height: "));
}
console.log();
for(let x = 1; x < height+1; x++){
  for(var i = 0; i < height-x; i++){
    output.push(" ");
  }for(var i = 0; i < x + 1; i++){
    output.push("#");
  }
  output.push("  ")
  for(var i = 0; i < x + 1; i++){
    output.push("#");
  }for(var i = 0; i < height-x; i++){
    output.push(" ");
  }
  console.log(output.join(""));
  output = [];
}
