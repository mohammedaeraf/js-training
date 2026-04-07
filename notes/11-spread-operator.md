# 📘 Spread Operator in JavaScript

## 🔹 What is Spread Operator?

The **Spread Operator (`...`)** is used to **expand (spread out)** elements of an array or object.

👉 It helps you:

* Copy arrays/objects
* Merge arrays/objects
* Pass multiple values easily

---

## 🔹 1. Spread with Arrays

### ✅ Example: Copy an Array

```javascript
const numbers = [1, 2, 3];
const copy = [...numbers];

console.log(copy); // [1, 2, 3]
```

👉 Creates a **new array (not reference)**

---

### ✅ Example: Merge Arrays

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]
```

---

### ✅ Example: Add Elements

```javascript
const nums = [2, 3];

const updated = [1, ...nums, 4];

console.log(updated); // [1, 2, 3, 4]
```

---

## 🔹 2. Spread with Objects

### ✅ Example: Copy Object

```javascript
const user = {
  name: "Ali",
  age: 20
};

const copyUser = { ...user };

console.log(copyUser);
```

---

### ✅ Example: Merge Objects

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 2 }
```

---

### ✅ Example: Override Values

```javascript
const user = {
  name: "Ali",
  age: 20
};

const updatedUser = {
  ...user,
  age: 25
};

console.log(updatedUser); // age becomes 25
```

👉 Last value **overwrites** earlier ones

---

## 🔹 3. Spread in Functions

### ✅ Example: Passing Array as Arguments

```javascript
const numbers = [5, 10, 15];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...numbers)); // 30
```

---

## 🔹 4. Important Notes

✅ Works with:

* Arrays
* Objects
* Strings (as characters)

