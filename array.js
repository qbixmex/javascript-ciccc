let multi = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
]

let sum = 0;
for (let i = 0; i < multi.length; i++) {
  let array = multi[i];
  for (let j = 0; j < array.length; j++) {
    console.log(i, '-', Int8Array[j]);
    sum += array[j];
  }
}

console.log("\nSummary", sum);
