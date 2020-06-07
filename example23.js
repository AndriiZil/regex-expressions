let sample = "Whitespace si important in separating words";
let countWhiteSpace = /\S/g; // Non space characters

let result = sample.match(countWhiteSpace);

console.log(result); // ['W', 'h', 'i', 't', 'e', 's', 'p','a', 'c', 'e', 's', 'i', 'i', 'm','p', 'o', 'r', 't', 'a', 'n', 't','i', 'n', 's', 'e', 'p', 'a', 'r','a', 't', 'i', 'n', 'g', 'w', 'o','r', 'd', 's'];