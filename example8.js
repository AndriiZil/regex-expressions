let bgRegex = /b[aiu]g/;

let quoteSample = "Beware of bugs in the above code; I have only proved it correctly";
let vowelRegex = /[aeiou]/ig;

let result = quoteSample.match(vowelRegex);
console.log(result); // => ['e', 'a', 'e', 'o', 'u','i', 'e', 'a', 'o', 'e','o', 'e', 'I', 'a', 'e','o', 'o', 'e', 'i', 'o','e']
