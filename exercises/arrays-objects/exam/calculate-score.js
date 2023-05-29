const students = [
  { name: "Alice", math: 90, science: 80, english: 95 },
  { name: "Bob", math: 75, science: 92, english: 87 },
  { name: "Charlie", math: 88, science: 85, english: 90 }
];

// [
//   { name: "Alice", averageScore: 88.33 },
//   { name: "Bob", averageScore: 84.67 },
//   { name: "Charlie", averageScore: 87.67 }
// ]

function calculateAverageScore(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push({
      name: array[i].name,
      averageScore: (array[i].math + array[i].science + array[i].english / 3),
    });
  }
  return newArray;
}

const scores = calculateAverageScore(students);

console.log(scores);
