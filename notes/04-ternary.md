# 📘 Ternary Operator

## ❓ What is the Ternary Operator?

The **ternary operator** is a **shortcut** for writing `if-else` statements. It is used to **evaluate a condition** and **return one of two values** based on whether the condition is true or false.

---

## 🔹 Syntax

```javascript
condition ? value_if_true : value_if_false;
```

- ✅ If the condition is **true**, it returns `value_if_true`.
- ❌ If the condition is **false**, it returns `value_if_false`.

---

## ✅ Basic Example

```javascript
let age = 18;
let message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);
```

**Output:**

```
You are an adult.
```

---

## 🆚 Ternary vs if-else

### Using `if-else`:

```javascript
if (marks >= 40) {
  result = "Pass";
} else {
  result = "Fail";
}
```

### Using Ternary:

```javascript
let result = marks >= 40 ? "Pass" : "Fail";
```

✅ Much shorter and cleaner!

---

## 🔁 Nested Ternary Operator

You can nest ternary operators for multiple conditions.

```javascript
let score = 85;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";
console.log(grade); // Output: B
```

> ⚠️ **Avoid over-nesting** — it can make code hard to read.

---

## 💡 Use Case Example: Even or Odd

```javascript
let num = 7;
let type = num % 2 === 0 ? "Even" : "Odd";
console.log(type); // Output: Odd
```

---

## 🎯 Practice Exercises

1. Write a ternary operator to check if a number is **positive or negative**.
2. Use a ternary to return `"Eligible"` or `"Not Eligible"` for voting based on age.
3. Assign `"Even"` or `"Odd"` to a variable using a ternary.
