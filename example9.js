let quoteSample = "The quik brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;

let result = quoteSample.match(alphabetRegex);

console.log(result); // => ['T', 'h', 'e', 'q', 'u', 'i', 'k','b', 'r', 'o', 'w', 'n', 'f', 'o','x', 'j', 'u', 'm', 'p', 's', 'o','v', 'e', 'r', 't', 'h', 'e', 'l','a', 'z', 'y', 'd', 'o', 'g']