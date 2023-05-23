const primerNumberChecker = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  return (count == 2) ? true : false;
};

const printResult = (input, callback) => {
  const result = callback(input);
  console.log(`Is ${input} a prime number ?:`, result ? 'Yes' : 'No');
};

console.log();

for (i = 1; i <= 10; i++) {
  printResult(i, primerNumberChecker);
}
