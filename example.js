let sample = "Whitespace si important in separating words";
let countWhiteSpace = /\s/g; // White space characters

let result = sample.match(countWhiteSpace);

console.log(result); // [ ' ', ' ', ' ', ' ', ' ' ];