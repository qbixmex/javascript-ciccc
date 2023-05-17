console.log('Algorithm 3\n');
console.log("Print FIZZ if number is odd\nand print BAZZ if number is even\nfrom zero to ten\n");

function fizzBazz() {
  for(let i = 0; i <= 10; i = i + 1) {
    if (i % 2 == 0) {
      console.log(i, "- BAZZ");
    } else {
      console.log(i, "- FIZZ");
    }
  }
}

fizzBazz();