/*
function sumTonN(n) {
  let total = 0;
  for (let index = n; index > 0; index--) {
    total += 1;
  }
  return total;
}
*/

function sumTonN(n, total = 0) {
  if (n == 0) return total;
  total += n;
  total = sumTonN(n - 1, total);
  return total;
}

const result = sumTonN(10);

console.log("Result:", result);