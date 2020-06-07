let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/g;

console.log(repeatRegex.test(repeatStr)); // => true
console.log(repeatStr.match(repeatRegex)); // => [ 'regex regex' ]

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;

let result = reRegex.test(repeatNum);

console.log(result); // => true