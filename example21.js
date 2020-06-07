let numString = "Your sandwich will be $5.00";
let numRegex = /\D/g; // Only Non Numbers (digits)

let result = numString.match(numRegex).length;

console.log(result); // => 24