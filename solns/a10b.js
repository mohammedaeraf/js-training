// Problem 1
console.log();
console.log("***** Problem 1*****");
let books = [
  { title: "Harry Potter", author: "J.K. Rowling", price: 450 },
  { title: "Fantastic Beasts", author: "J.K. Rowling", price: 380 },
  { title: "The Alchemist", author: "Paulo Coelho", price: 300 },
  { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", price: 350 },
];

let rowlingBooks = books.filter((book) => book.author == "J.K. Rowling");
console.log("*** Books by J.K. Rowling ***");
rowlingBooks.forEach((book) => console.log(`${book.title} - ₹${book.price}`));

let totalPrice = books.reduce((sum, book) => sum + book.price, 0);
let averagePrice = totalPrice / books.length;
console.log("Average Price:", averagePrice);

// Problem 2
console.log();
console.log("***** Problem 2 *****");

let students = [
  { name: "Ali", marks: 78 },
  { name: "Rita", marks: 85 },
  { name: "John", marks: 66 },
  { name: "Sara", marks: 95 },
  { name: "Raj", marks: 52 },
];

// Filter students with marks > 75
let topStudents = students.filter((s) => s.marks > 75);
console.log("Top Students:", topStudents);

// Get names of passed students
let passedNames = topStudents.map((s) => s.name);
console.log("Names of Passed Students:", passedNames);

// Total marks
let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
console.log("Total Marks:", totalMarks);
