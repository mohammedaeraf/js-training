let students = [
  { name: "Ali", marks: 85 },
  { name: "Zoya", marks: 90 },
  { name: "John", marks: 78 },
];

let total = students.reduce((sum, student) => sum + student.marks, 0);
let average = total / students.length;

console.log("Average Marks:", average); // 84.33
