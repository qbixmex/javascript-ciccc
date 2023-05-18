const addTwoNumbers = (a, b) => a + b;

function printSumOfTwoNumbers(a, b, callBack) {
  console.log(`The sum of ${a} and ${b} is ${callBack(a, b)}`);
}

console.log();

printSumOfTwoNumbers(8, 4, addTwoNumbers);
printSumOfTwoNumbers(5, 8, (a, b) => a + b);
