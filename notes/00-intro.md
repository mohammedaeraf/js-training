# 🚀 Intro to JavaScript for React Students

### 👩‍💻 Who is this for?

* You know HTML & CSS
* You're starting with React
* You want to learn the JavaScript you **must know** before learning React

---

## 📌 Why Learn JavaScript Before React?

React is a **JavaScript library**. To write React apps confidently, you need to understand how JavaScript:

* Handles **data**
* Works with the **DOM**
* Uses **functions**, **objects**, and **arrays**
* Applies **conditional logic and loops**
* Supports **modular code** using `import`/`export`

---

## 🧠 Key JavaScript Concepts You Should Know for React

---

### 1. **Variables and Constants**

```javascript
let name = "Alice";    // Can be reassigned
const age = 25;        // Cannot be reassigned
```

---

### 2. **Data Types**

```javascript
let isStudent = true;             // Boolean
let score = 88.5;                 // Number
let skills = ["HTML", "CSS"];     // Array
let user = { name: "Bob", age: 22 }; // Object
```

---

### 3. **Functions**

```javascript
function greet(name) {
  return "Hello, " + name;
}

const result = greet("React Student");
console.log(result); // Hello, React Student
```

---

### 4. **Arrow Functions (used a lot in React)**

```javascript
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```

---

### 5. **Conditionals**

```javascript
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

### 6. **Loops**

```javascript
for (let i = 1; i <= 3; i++) {
  console.log("Line " + i);
}
```

---

### 7. **DOM Manipulation (non-React way)**

```javascript
document.getElementById("demo").textContent = "Hello JavaScript";
```

> ⚠️ In React, we don’t use `document.getElementById`. Instead, we **bind data to the UI** using **JSX and state**.

---

### 8. **Objects and Arrays in Practice**

```javascript
const product = {
  name: "Laptop",
  price: 45000
};

console.log(product.name);  // Laptop
```

```javascript
const users = ["Alice", "Bob", "Charlie"];
users.forEach((u) => console.log(u));
```

---

### 9. **Array Methods You'll Use in React**

```javascript
// map()
const doubled = [1, 2, 3].map(num => num * 2); // [2, 4, 6]

// filter()
const even = [1, 2, 3, 4].filter(num => num % 2 === 0); // [2, 4]

// reduce()
const total = [10, 20, 30].reduce((sum, n) => sum + n, 0); // 60
```

---

### 10. **Modules: import / export**

```javascript
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from "./math.js";
console.log(add(2, 3)); // 5
```

---

## ✅ Practice Suggestions Before Starting React

| Concept                    | Why It Matters in React               |
| -------------------------- | ------------------------------------- |
| Variables (`let`, `const`) | Used for state & logic                |
| Arrow Functions            | Common syntax in React components     |
| Arrays & Objects           | Data structures used for props, state |
| map(), filter(), reduce()  | Used to render lists dynamically      |
| import/export              | Used in every React file              |

---

### ✨ Bonus Tip:

In React, you don’t write raw HTML inside strings or manipulate the DOM manually. Instead, you use **JSX**, which looks like HTML but is really JavaScript.

```jsx
// JSX in React
function Hello() {
  return <h1>Hello React!</h1>;
}
```

---

## 🎓 Ready to Learn React?

Once you're comfortable with:

* Variables, functions, arrays, objects
* Arrow functions
* `map()` and `filter()`
* ES6 module system (`import` / `export`)

👉 You’re all set to begin React.
