let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/;

let result = userCheck.test(username);

console.log(result);