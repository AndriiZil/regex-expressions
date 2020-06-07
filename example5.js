let extractStr = 'Extract th world "coding" from this string';
let codingRegex = /coding/;

let result = extractStr.match(codingRegex);

console.log(result); // =>
/*
  [
    'coding',
    index: 18,
    input: 'Extract th world "coding" from this string',
    groups: undefined
  ]
 */