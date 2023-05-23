const factorial = (value) => {
  let summary = 1;
  for (let i = value; i > 0; i--) {
    summary = summary * i;
  }
  console.log("Factorial:", summary);
}

factorial(5);
