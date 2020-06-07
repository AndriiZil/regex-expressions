let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex1 = /search/;
let waldoRegex2 = /Waldo/;

let result1 = waldoRegex1.test(waldoIsHiding);
let result2 = waldoRegex2.test(waldoIsHiding);

console.log(result1); // => false
console.log(result2); // => true