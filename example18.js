let quoteSample = "The five bosing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Exclude empty string // All letters and numbers

let result = quoteSample.match(alphabetRegexV2).length;

console.log(result); // 31