const fizzBazz = (from, to) => {
  for (i = from; i <= to; i++) {
    if (i % 3 == 0) {
      console.log(`${i} - Fizz`);
    } else if (i % 5 == 0) {
      console.log(`${i} - FizzBuzz`);
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} - Buzz`);
    } else {
      console.log(i);
    }
  }
};

fizzBazz(1, 50);

console.log("=".repeat(50));

const fizzBazz2 = (from, to) => {
  for (i = from; i >= to; i--) {
    if (i % 3 == 0) {
      console.log(`${i} - Fizz`);
    } else if (i % 5 == 0) {
      console.log(`${i} - FizzBuzz`);
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} - Buzz`);
    } else {
      console.log(i);
    }
  }
};

fizzBazz2(50, 1);