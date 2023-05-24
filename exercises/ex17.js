function concatArray(array1, array2) {
  //* 1 Make a new array with the sum of two arrays length
  let newArray = new Array(array1.length + array2.length);

  //* 2 - Copy the first array first
  for (let index = 0; index < array1.length; index++) {
    newArray[index] = array1[index];
  }

  //* 3 - Copy the second array first
  for (let index = array1.length; index < newArray.length; index++) {
    newArray[index] = array2[index - array1.length];
  }

  return newArray;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log("Array1:", array1);
console.log("Array2:", array2);
const result = concatArray(array1, array2)
console.log("New Array:", result);
