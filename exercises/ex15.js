function pushToArray(newNumber, oldArray) {
  let newArray = new Array(oldArray.length + 1);

  for (let i = 0; i < oldArray.length; i++) {
    newArray[i] = oldArray[i];
  }

  newArray[oldArray.length] = newNumber;

  //? Second Way
  //? newArray[newArray.length - 1] = newNumber;

  return newArray;
}

let array = [1, 2, 3, 4, 5];
let newArray = pushToArray(6, array);

console.log(newArray);