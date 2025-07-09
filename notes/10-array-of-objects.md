# 📘 Array of Objects


## 🧠 What is an Array of Objects?

In JavaScript, you can store **multiple objects inside an array**. Each object can represent a real-world entity like a product, student, book, etc. This structure is useful when you want to manage **a list of similar items**, each with its own data.

---

## 📦 Syntax Example

```javascript
let students = [
  { name: "Ali", age: 18, marks: 85 },
  { name: "Zara", age: 19, marks: 92 },
  { name: "John", age: 17, marks: 78 },
];
```

Here, `students` is an **array** containing **3 objects**, each representing a student with properties.

---

## 🔧 Accessing Data from Array of Objects

```javascript
console.log(students[0].name); // "Ali"
console.log(students[1].marks); // 92
```

---

## 🔁 Looping Through Array of Objects

### Using `for-of` Loop

```javascript
for (let student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}
```

### Using `forEach()`

```javascript
students.forEach((s) => {
  console.log(`${s.name} is ${s.age} years old`);
});
```

---

## 🧪 Useful Array Functions with Objects

### 1. `filter()` – Get Students with Marks > 80

```javascript
let toppers = students.filter((s) => s.marks > 80);
console.log(toppers);
```

### 2. `map()` – Create an Array of Names Only

```javascript
let names = students.map((s) => s.name);
console.log(names); // ["Ali", "Zara", "John"]
```

### 3. `reduce()` – Calculate Total Marks

```javascript
let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
console.log("Total Marks:", totalMarks);
```

---

## ✅ Real-World Example: Products List

```javascript
let products = [
  { name: "Laptop", price: 900 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 150 },
];

// Print name and price of each product
products.forEach((p) => {
  console.log(`${p.name}: ₹${p.price}`);
});
```

---

## 📝 Practice Task

Try solving these:

1. Create an array of 5 `book` objects with `title`, `author`, and `price`.
2. Print all books by a particular author.
3. Find and print the book with the highest price.

---

## 📌 Summary

| Feature    | Description                                 |
| ---------- | ------------------------------------------- |
| `[]`       | Used to define an array                     |
| `{}`       | Used to define each object inside the array |
| `for-of`   | Loop through each object                    |
| `filter()` | Create a new array with filtered objects    |
| `map()`    | Transform array of objects                  |
| `reduce()` | Perform a calculation across array          |
