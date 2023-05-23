const student = {
  firstName: 'Daniel',
  lastName: 'Gonzalez',
  age: 40,
  city: "Vancouver",
  country: "Canada",
  totalDaysSinceBirth: function() {
    return this.age * 365;
  }
};

console.log(
  "\nTotal days passed since birth:",
  student.totalDaysSinceBirth()
);
