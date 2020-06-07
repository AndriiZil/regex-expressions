let humStr = "I'll hum a song";
let hugStr = "Bear hug";

let huRegex = /hu./;
let huRegex2 = /hu./ig;

console.log(humStr.match(huRegex)); // => [ 'hum', index: 5, input: "I'll hum a song", groups: undefined ]
console.log(humStr.match(huRegex)); // => [ 'hum', index: 5, input: "I'll hum a song", groups: undefined ]

console.log(humStr.match(huRegex2)); // => [ 'hum' ]
console.log(hugStr.match(huRegex2)); // => [ 'hug' ]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
console.log(result); // => true
