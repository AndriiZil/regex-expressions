let soccerWorld = "goooooooooooool!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/g;

console.log(soccerWorld.match(goRegex)); // => [ 'gooooooooooooo' ]
console.log(gPhrase.match(goRegex)); // => [ 'g', 'g' ]
console.log(oPhrase.match(goRegex)); // => null

let chewieQuote = "Aaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrgh";
let chewieRegex = /Aa*/g;

let result = chewieQuote.match(chewieRegex);
console.log(result); // => [ 'Aaaaaaaaaaaaaaaaaaaaaa' ]