let testStr = "Repeat Repeat Repeat";
let ourRegex = /Repeat/;

console.log(testStr.match(ourRegex)); // =>
/*
  [
    'Repeat',
    index: 0,
    input: 'Repeat Repeat Repeat',
    groups: undefined
  ]
 */

let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /twinkle/ig;

let result = twinkleStar.match(starRegex);

console.log(result); // => [ 'Twinkle', 'twinkle' ]