let employees = [
  { name: "Aisha", salary: 30000 },
  { name: "Rahul", salary: 35000 },
  { name: "Meena", salary: 28000 },
];

// Increase each salary by ₹2000
let updated = employees.map((emp) => ({
  name: emp.name,
  salary: emp.salary + 2000,
}));

console.log("Updated Salaries:", updated);
