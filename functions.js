function sayHello(name) {
  console.log(`Hello ${name}`);
}

console.log();

sayHello('Daniel');
sayHello('Rafael');
sayHello('Michael');

console.log("=".repeat(40));

function squareNumber(n) {
  console.log("Result:", n * n);
}

squareNumber(2);
squareNumber(4);
squareNumber(7);
squareNumber(8);

console.log("=".repeat(40));

function addTwoNumbers(a, b) {
  return a + b;
}

let result;

result = addTwoNumbers(77, 33);

console.log("Result:", result);

//* User Input
let number1 = 83;
let number2 = 95;

result = addTwoNumbers(number1, number2);

console.log("Result:", result);
