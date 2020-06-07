let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Only Numbers (digits)

let result = numString.match(numRegex).length;

console.log(result); // => 3