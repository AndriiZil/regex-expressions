let quit = "qu";
let noquit = "qt";

let quRegex = /q(?=u)/g;
let qRegex = /q(?!u)/g;

console.log(quit.match(quRegex)); // => [ 'q' ]
console.log(noquit.match(qRegex)); // => [ 'q' ]

const sampleWorld = "astronaut";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;

// (?=\w{5}) => 5 Or more characters
// (?=\D*\d{2}) => 5 Or more digits

let result = pwRegex.test(sampleWorld);

console.log(result); // => false