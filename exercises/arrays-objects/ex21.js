/*
  Starting with this array of prices,
  change the prices of the 1st, 3rd, and 7th elements in the array.

  var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
  TIP: The 1st element of any array has an index of 0.

  Afterwards, print out the prices array to the console.
*/

function printArray(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(i + 1, '-', array[i]);
  }
}

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

console.log("Before");
printArray(prices);

prices[0] = 2.25;
prices[2] = 5.75;
prices[6] = 24.50;

console.log("After");
printArray(prices);




