# 📘 Variables, Constants, Data Types in JS

---

## 🧾 1. What Are Variables?

Variables are containers used to **store data** that can be used later in the program.

### 🔹 Declaring Variables:

| Keyword | Meaning                            |
| ------- | ---------------------------------- |
| `let`   | Creates a variable (can change)    |
| `const` | Creates a constant (cannot change) |

### ✅ Example:

```javascript
let name = "Alice";    // variable
const PI = 3.14;       // constant
```

> 🔸 Use `let` when the value **may change**
> 🔸 Use `const` when the value **should not change**

---

## 🧠 2. JavaScript Data Types

JavaScript is **dynamically typed** – variables don't need a fixed type.

### ✅ Basic (Primitive) Data Types:

| Type      | Example         | Notes                        |
| --------- | --------------- | ---------------------------- |
| String    | `"Hello"`       | Text inside quotes           |
| Number    | `42`, `3.14`    | Integer or float             |
| Boolean   | `true`, `false` | Yes/No, On/Off               |
| Undefined | `let x;`        | Declared but not assigned    |
| Null      | `let x = null;` | Intentionally empty          |


### ✅ Example:

```javascript
let age = 25;              // Number
let isStudent = true;      // Boolean
let name = "John";         // String
let score;                 // Undefined
let nothing = null;        // Null
```

---

## 🧩 3. Complex (Reference) Data Types

### ✅ Arrays:

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```

### ✅ Objects:

```javascript
let user = {
  name: "Alice",
  age: 22
};
```

---

## 📌 4. Difference Between `let`, `const`, and `var`

| Keyword | Block Scoped | Re-declarable | Re-assignable |
| ------- | ------------ | ------------- | ------------- |
| `var`   | ❌ No         | ✅ Yes         | ✅ Yes         |
| `let`   | ✅ Yes        | ❌ No          | ✅ Yes         |
| `const` | ✅ Yes        | ❌ No          | ❌ No          |

> ⚠️ Avoid using `var` in modern JavaScript.

---

## 💬 5. What Are Statements and Expressions?

### ✅ Expression:

> Produces a value and **can be assigned or returned**

```javascript
5 + 3            // 8 (expression)
let sum = 5 + 3  // expression assigned to a variable
"name" + "JS"    // "nameJS"
```

### ✅ Statement:

> Performs an action or **controls the flow**

```javascript
let x = 10;              // Variable declaration → statement
if (x > 5) {             // if statement
  console.log("High");   // statement inside block
}
```

---

## 📎 Summary

| Concept    | Example                  | Description                 |
| ---------- | ------------------------ | --------------------------- |
| Variable   | `let x = 10;`            | Value that can be changed   |
| Constant   | `const pi = 3.14;`       | Value that can't be changed |
| Data Type  | `"text"`, `42`, `true`   | Type of data stored         |
| Expression | `5 + 3`, `x * y`         | Produces a value            |
| Statement  | `let x = 5;`, `if () {}` | Performs an action          |
