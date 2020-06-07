let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Only on start

let result = calRegex.test(rickyAndCal);

console.log(result); // => true