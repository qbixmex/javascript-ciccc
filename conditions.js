const raining = false;
const cold = false;
const summer = true;

console.log();

if (raining) {
  console.log("It's raining!");
} else if (cold) {
  console.log("It's cold!");
} else if (summer) {
  console.log("It's summer!");
} else {
  console.log("It's not raining!");
}

let forSale = true;
let message = forSale ? "Buy it" : "Do not buy it!";

console.log(message);