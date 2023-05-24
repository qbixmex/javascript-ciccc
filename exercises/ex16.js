function popFromArray(oldArray) {
  let newArray = new Array(oldArray.length - 1);

  for (let i = 0; i < newArray.length; i++) {
    if (i == newArray.length) {
      break;
    }
    newArray[i] = oldArray[i];
  }

  return newArray;
}

console.log();
console.log(popFromArray([1, 2, 3, 4, 5, 6]));
