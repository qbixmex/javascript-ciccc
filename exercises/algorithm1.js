let CURRENCY = "MX";
const AMOUNT = 24.50;

console.log("Algorithm 2\n");
console.log("Console out how much is 24.50 Mexican Pesos\nin Canadian Dollar and viceversa\n");
console.log("AMOUNT:", "$ " + AMOUNT);
console.log("Currency:", CURRENCY);

function convertCurrency() {
  if (CURRENCY == "MX") {
    console.log("Result:", "$", (AMOUNT / 12.70).toFixed(2), "CA");
  } else {
    console.log("Result:", "$", (AMOUNT * 12.70).toFixed(2), "MX");
  }
}

convertCurrency();

CURRENCY = 'CA';
console.log("Currency:", CURRENCY);
convertCurrency();