let n = 20;
let sum = 0;

for (let i = 0; i < n; i++) {
  sum = sum + i;
}

console.log("Sum All", sum);

for (let i = 1; i < n; i += 2) {
  sum = sum + i;
}

console.log("Sum Even Numbers", sum);

for (let i = 1; i < n; i += 2) {
  sum = sum + i;
}

console.log("Sum Odd Numbers", sum);

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  let value = letter.charCodeAt(0);
  sum = value + sum;
}

console.log("Sum All Characters ASCI Values", sum);

for (let index = 0; index < 10; index++) {
  if (index % 2 == 0 && index % 3 == 0) {
    console.log(index, " is divisible by 2 and 3");
  } else if (index % 2 == 0) {
    console.log(index, " is divisible by 2 ONLY");
  } else if (index % 3 == 0) {
    console.log(index, " is divisible by 3 ONLY");
  } else {
    console.log(index, " is divisible by NONE");
  }
}