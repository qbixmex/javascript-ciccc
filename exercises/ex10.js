const multiples = (from, to) => {
  let count = 0;
  for (let i = from; i <= to; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      count += i;
    }
  }
  console.log("Result 1:", count);
};

multiples(1, 10);

console.log("=".repeat(50));

const multiples2 = (from, to) => {
  let count = 0;
  for (let i = from; i >= to; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      count += i;
    }
  }
  console.log("Result 2:", count);
};

multiples2(10, 1);