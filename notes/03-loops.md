## 🔁 Basic Loops 

### 🎯 What are Loops?

Loops are used to execute a block of code **multiple times** until a certain condition is met.

---

## ✅ 1. `for` Loop

### 🔹 Syntax:

```javascript
for (initialization; condition; update) {
  // code to be executed
}
```

### 🔹 Example: Print numbers from 1 to 5

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### 💡 When to use:

Use `for` loop when the **number of iterations is known**.

---

## ✅ 2. `while` Loop

### 🔹 Syntax:

```javascript
let i = 1;
while (condition) {
  // code to be executed
  i++;
}
```

### 🔹 Example: Print numbers from 1 to 5

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### 💡 When to use:

Use `while` loop when the number of iterations is **not known in advance** and depends on a condition.

---

## ✅ 3. `do-while` Loop

### 🔹 Syntax:

```javascript
let i = 1;
do {
  // code to be executed
  i++;
} while (condition);
```

### 🔹 Example: Print numbers from 1 to 5

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### 💡 Key Difference:

- `do-while` runs the loop **at least once**, even if the condition is false at the start.

---

## 🧠 Summary Table

| Loop Type  | Condition Checked | Minimum Executions | Use Case                        |
| ---------- | ----------------- | ------------------ | ------------------------------- |
| `for`      | Before each loop  | 0                  | Fixed number of repetitions     |
| `while`    | Before each loop  | 0                  | Repeat until condition is false |
| `do-while` | After first loop  | 1                  | Must run at least once          |

---

### 🔧 Tip for Beginners:

- Start with `for` loops for counting.
- Use `while` when the stopping point is based on logic (e.g. user input).
- Use `do-while` when the task must happen at least once before checking a condition.
