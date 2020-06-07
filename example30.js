let wrongText = "The sky is silver.";
let silverRegex = /silver/;

const text = wrongText.replace(silverRegex, "blue");

console.log(text); // => The sky is blue.

const result = "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

console.log(result); // => Camp Code

let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";

let result2 = huhText.replace(fixRegex, replaceText);

console.log(result2); // => This sandwich is okey-dokey.