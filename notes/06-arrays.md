# 📘 JavaScript Tutorial: Arrays

---

## 🔹 What is an Array?

An **array** is a special variable that can hold **multiple values** in a single variable.

### ✅ Example:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

---

## 📌 Why Use Arrays?

* Store **multiple values** of the same or different types
* Access items using **index**
* Use built-in **methods** to manipulate data easily

---

## 🔹 Declaring an Array

```javascript
let numbers = [10, 20, 30, 40];         // Array of numbers
let names = ["Alice", "Bob", "Charlie"]; // Array of strings
let mixed = [42, "Hello", true];        // Mixed types
```

> 🔸 Array indices start from **0**
> `numbers[0]` → 10

---

## 🔹 Accessing Elements

```javascript
let colors = ["Red", "Green", "Blue"];
console.log(colors[1]); // Output: Green
```

---

## 🔹 Modifying Array Elements

```javascript
let languages = ["HTML", "CSS", "JS"];
languages[2] = "JavaScript";
```

---

## 🔹 Common Array Properties

| Property | Description                 |
| -------- | --------------------------- |
| `length` | Number of elements in array |

```javascript
let animals = ["Dog", "Cat", "Lion"];
console.log(animals.length); // Output: 3
```

---

## 🔹 Common Array Methods

| Method              | Description                   |
| ------------------- | ----------------------------- |
| `push()`            | Adds element at the end       |
| `pop()`             | Removes last element          |
| `unshift()`         | Adds element at the beginning |
| `shift()`           | Removes first element         |
| `indexOf()`         | Finds index of a value        |
| `includes()`        | Checks if an element exists   |
| `slice(start, end)` | Returns a portion of array    |
| `concat()`          | Merges arrays                 |
| `join()`            | Joins array into string       |

---

### ✅ Examples:

#### `push()` and `pop()`:

```javascript
let nums = [1, 2, 3];
nums.push(4);     // [1, 2, 3, 4]
nums.pop();       // [1, 2, 3]
```

#### `unshift()` and `shift()`:

```javascript
let queue = ["A", "B"];
queue.unshift("Start"); // ["Start", "A", "B"]
queue.shift();          // ["A", "B"]
```

#### `indexOf()` and `includes()`:

```javascript
let items = ["Pen", "Pencil"];
console.log(items.indexOf("Pencil")); // 1
console.log(items.includes("Eraser")); // false
```

#### `slice()`:

```javascript
let arr = [10, 20, 30, 40];
let part = arr.slice(1, 3); // [20, 30]
```

#### `concat()`:

```javascript
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); // [1, 2, 3, 4]
```

---

## 🔹 Looping Through Arrays

### Using `for` loop:

```javascript
let names = ["Tom", "Jerry"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

### Using `for-of` loop:

```javascript
for (let name of names) {
  console.log(name);
}
```

### Using `forEach()`:

```javascript
names.forEach((n) => console.log(n));
```

---

## 🔹 Array with Functions

```javascript
function printArray(arr) {
  arr.forEach((item) => console.log(item));
}

printArray(["Apple", "Banana", "Mango"]);
```

---

## 🧠 Summary

| Feature     | Example                             |
| ----------- | ----------------------------------- |
| Declare     | `let arr = [1, 2, 3];`              |
| Access      | `arr[0] // 1`                       |
| Add/Remove  | `push()`, `pop()`, `shift()`        |
| Check       | `length`, `includes()`, `indexOf()` |
| Slice/Merge | `slice()`, `concat()`               |
| Loop        | `for`, `for-of`, `forEach()`        |

