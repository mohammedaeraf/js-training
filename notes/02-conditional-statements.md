## 📘 Conditional Statements

### 🎯 What are Conditional Statements?

Conditional statements allow you to make decisions in your code based on whether a condition is **true** or **false**.

---

## ✅ 1. `if` Statement

### 🔹 Syntax:

```javascript
if (condition) {
  // code to run if condition is true
}
```

### 🔹 Example:

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

---

## ✅ 2. `if-else` Statement

### 🔹 Syntax:

```javascript
if (condition) {
  // code if true
} else {
  // code if false
}
```

### 🔹 Example:

```javascript
let temperature = 30;

if (temperature > 35) {
  console.log("It's too hot!");
} else {
  console.log("Weather is normal.");
}
```

---

## ✅ 3. `if-else if-else` Ladder

### 🔹 Syntax:

```javascript
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if none are true
}
```

### 🔹 Example:

```javascript
let score = 75;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}
```

---

## ✅ 4. `switch-case` Statement

### 🔹 Use Case:

Use `switch` when you have **multiple fixed values** to check against one variable.

### 🔹 Syntax:

```javascript
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
  // code if no match
}
```

### 🔹 Example:

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

> ⚠️ Don’t forget the `break;` — it prevents fall-through to the next case.

---

## 🧠 Summary Table

| Type          | When to Use                                    |
| ------------- | ---------------------------------------------- |
| `if`          | One condition                                  |
| `if-else`     | Two possible outcomes                          |
| `if-else if`  | Multiple range-based conditions                |
| `switch-case` | Multiple exact values (like 1, 2, "yes", etc.) |
