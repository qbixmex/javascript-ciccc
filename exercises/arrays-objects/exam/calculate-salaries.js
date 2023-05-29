// The function should return:
// [
//   { department: "HR", totalSalary: 9500 },
//   { department: "IT", totalSalary: 18500 },
//   { department: "Finance", totalSalary: 5500 },
// ]

const calculateTotalSalaryByDepartment = (employees) => {
  const summary = [
    { department: "HR", totalSalary: 0 },
    { department: "IT", totalSalary: 0 },
    { department: "Finance", totalSalary: 0 },
  ];

  for(let i = 0; i < summary.length; i++) {
    for(let j = 0; j < employees.length; j++) {
      if (summary[i].department === employees[j].department) {
        summary[i].totalSalary += employees[j].salary;
      }
    } 
  }

  return summary;
};

const employees = [
  { name: "Alice", department: "HR", salary: 5000 },
  { name: "Bob", department: "IT", salary: 6000 },
  { name: "Charlie", department: "HR", salary: 4500 },
  { name: "David", department: "IT", salary: 7000 },
  { name: "Eve", department: "Finance", salary: 5500 }, 
  { name: "Frank", department: "IT", salary: 5500 },
];

const summary = calculateTotalSalaryByDepartment(employees);

console.log(summary);
