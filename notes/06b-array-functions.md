# 📘 Array Functions (Advanced)

---

## 🔹 What Are Array Functions?

JavaScript provides **built-in array methods** that allow you to **manipulate, transform, and iterate** through arrays efficiently and concisely.

---

## ✅ 1. `forEach()`

### ➤ Purpose: Iterates through each element in the array.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

📌 **Use Case:** Perform actions like printing or updating the DOM, but doesn’t return a new array.

---

## ✅ 2. `map()`

### ➤ Purpose: Creates a **new array** by applying a function to **each element**.

```javascript
let nums = [1, 2, 3, 4];

let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

📌 **Use Case:** Transform data (e.g., formatting values, updating prices).

---

## ✅ 3. `filter()`

### ➤ Purpose: Returns a new array with **elements that pass a condition**.

```javascript
let scores = [55, 78, 90, 40, 65];

let passingScores = scores.filter(score => score >= 60);
console.log(passingScores); // [78, 90, 65]
```

📌 **Use Case:** Select specific items based on condition (e.g., filtering users by age or role).

---

## ✅ 4. `reduce()`

### ➤ Purpose: Reduces the array to a **single value** by accumulating a result.

```javascript
let numbers = [10, 20, 30];

let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 60
```

📌 **Use Case:** Total cost, average score, combine values into an object/string.

---

## ✅ 5. `find()`

### ➤ Purpose: Returns the **first matching element** that satisfies the condition.

```javascript
let users = [
  { name: "Ali", age: 25 },
  { name: "Zara", age: 19 },
];

let found = users.find(user => user.age > 20);
console.log(found); // { name: "Ali", age: 25 }
```

📌 **Use Case:** Get a single item like a product, user, etc.

---

## 🧠 Summary Table

| Method      | Returns            | Modifies Original? | Use Case                        |
| ----------- | ------------------ | ------------------ | ------------------------------- |
| `forEach()` | undefined          | No                 | Run action for each item        |
| `map()`     | New array          | No                 | Transform array values          |
| `filter()`  | New filtered array | No                 | Select based on condition       |
| `reduce()`  | Single value       | No                 | Sum, average, accumulate values |
| `find()`    | First match        | No                 | Search for one item             |
