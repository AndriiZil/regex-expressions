let haStr = "Hazzzzzah";
let ohRegex = /z{4,}/;

let result = ohRegex.test(haStr);

console.log(result); // true