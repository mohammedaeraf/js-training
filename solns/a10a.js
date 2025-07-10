let users = [
  { name: "Aisha", age: 22 },
  { name: "Zaid", age: 19 },
  { name: "Kiran", age: 25 }
];

console.log(users[1].name); //prints Zaid

users.forEach(u => {
  console.log(u.name + " is " + u.age + " years old");
});

// Above code Prints
// Aisha is 22 years old
// Zaid is 19 years old
// Kiran is 25 years old
