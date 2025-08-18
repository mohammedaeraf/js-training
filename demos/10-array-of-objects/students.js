let students = [
  { name: "Ali", age: 18, marks: 85 },
  { name: "Zara", age: 19, marks: 92 },
  { name: "John", age: 17, marks: 78 },
];

for (let student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}

students.forEach((s) => {
  console.log(`${s.name} is ${s.age} years old`);
});

let toppers = students.filter((s) => s.marks > 80);
console.log(toppers);

let names = students.map((s) => s.name);
console.log(names); // ["Ali", "Zara", "John"]

let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
console.log("Total Marks:", totalMarks);
