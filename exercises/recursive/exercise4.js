function fibonacci(number) {
  if (number === 0 || number === 1) return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(6));

function fibonacciMemoized(number, memo = {}) {
  if (number === 0 || number === 1) return 1;
  if (memo[number]) return memo[number];
  return (
    memo[number] =
      fibonacci(number - 1) + fibonacci(number - 2)
  );
}

console.log(fibonacciMemoized(6));