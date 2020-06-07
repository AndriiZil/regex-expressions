let string = "titanic";
let regex = /t[a-z]*?i/g;

console.log(string.match(regex)); // => [ 'ti', 'tani' ]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/g;

let result = text.match(myRegex); // => [ '<h1>, </h1>' ]

console.log(result);