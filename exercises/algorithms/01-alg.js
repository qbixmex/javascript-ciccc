function sumNumbers(numbers) { // O(n)
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumNumbers([1, 3, 10]);
console.log("Result:", result);
