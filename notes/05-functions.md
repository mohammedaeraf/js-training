# 📘 Functions 

## 🔹 What is a Function?

A **function** is a **block of reusable code** that performs a specific task.
Functions help you write **cleaner**, **modular**, and **maintainable** code.

---

## ✅ 1. Function Declaration (Named Function)

### 🔸 Syntax:

```javascript
function functionName(parameters) {
  // code to execute
}
```

### 🔸 Example:

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice"); // Output: Hello, Alice
```

---

## ✅ 2. Function with Return Value

### 🔸 Example:

```javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8
```

> 💡 `return` sends a value back to where the function was called.

---

## ✅ 3. Function Expression

A function can also be stored in a variable.

```javascript
const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // Output: 20
```

---

## ✅ 4. Arrow Functions (ES6)

Arrow functions are **shorter and cleaner**.

```javascript
const square = (n) => n * n;

console.log(square(6)); // Output: 36
```

> ⚠️ Arrow functions don't have their own `this` context — useful in React!

---

## ✅ 5. Default Parameters

Set default values for parameters in case they're not passed.

```javascript
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();          // Output: Hello, Guest
greet("Rahul");   // Output: Hello, Rahul
```

---

## ✅ 6. Function Scope

Variables declared **inside a function** are **not accessible** outside.

```javascript
function testScope() {
  let local = "I'm local";
  console.log(local);
}
testScope();          // Works
// console.log(local); // ❌ Error: local is not defined
```

---

## ✅ 7. Parameters vs Arguments

* **Parameter**: Variable in function definition
* **Argument**: Actual value passed when calling the function

```javascript
function sayHi(name) { // name is parameter
  console.log("Hi, " + name);
}

sayHi("Sita"); // "Sita" is argument
```

---

## 🧠 Summary

| Type                 | Syntax                          | Returns Value?    | Used In             |
| -------------------- | ------------------------------- | ----------------- | ------------------- |
| Function Declaration | `function sum(a, b) {}`         | Yes (if `return`) | General purpose     |
| Function Expression  | `const sum = function(a, b) {}` | Yes               | Stored in variables |
| Arrow Function       | `const sum = (a, b) => a + b`   | Yes               | Modern JS & React   |

---

## 🎯 Practice Exercises

1. Create a function to calculate the **area of a rectangle**.
2. Write a function that takes a number and returns **"Even" or "Odd"**.
3. Create an arrow function to find the **square of a number**.
4. Write a function to return the **factorial** of a number.
5. Create a function that prints a pattern based on the given **character and lines**.
