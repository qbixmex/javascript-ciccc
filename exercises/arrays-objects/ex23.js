/*
  const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

  Write a loop under each comment in the file.
  Under the first, write a while loop that prints out each item of ingredients.
  Under the second, write a for loop that does the same thing.
  And under the third, write any loop, while or for that prints out each item of ingredients but backwards
  (that is, the first should be "bananas" and the last "eggs").
*/

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let x = 0;

console.log("=======================FIRST=======================");

while(x < ingredients.length) {
  console.log(ingredients[x]);
  x++;
}

console.log("=======================SECOND=======================");

for(let y = 0; y < ingredients.length; y++) {
  console.log(ingredients[y]);
}

console.log("=======================THIRD=======================");

for (let z = ingredients.length - 1; z >= 0; z--) {
  console.log(ingredients[z]);
}