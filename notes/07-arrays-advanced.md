# Map, Filter and Reduce Functions in JavaScript

Below is a concise and practical **JavaScript Array Functions Tutorial** that explains `map()`, `filter()`, and `reduce()` — along with syntax, examples, and real-world use cases.

---

## 🔹 1. `map()` — Transforming Each Element

### **What it does:**

- Creates a **new array** by applying a function to **each element** of the original array.

### **Syntax:**

```jsx
const newArray = originalArray.map((element, index, array) => {
  // return transformed value
});
```

### **Example:**

```jsx
const numbers = [1, 2, 3, 4];
const squares = numbers.map((num) => num * num);
console.log(squares); // [1, 4, 9, 16]
```

### **Use Case:**

- Converting prices to another currency
- Capitalizing strings
- Apply discount on all items in a Cart
- Formatting dates

---

## 🔹 2. `filter()` — Filtering Based on Condition

### **What it does:**

- Returns a **new array** with only those elements that **pass the test** (return `true`).

### **Syntax:**

```jsx
const filteredArray = originalArray.filter((element, index, array) => {
  return condition;
});
```

### **Example:**

```jsx
const numbers = [3, 8, 10, 15];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [8, 10]
```

### **Use Case:**

- Getting active users from a user list
- Filtering products by availability or price
- Validating data
- Filtering courses based on category
- Filtering books based on book type

---

## 🔹 3. `reduce()` — Reducing to a Single Value

### **What it does:**

- Reduces the array to a **single value** (number, string, object, etc.) by applying a function on each element.

### **Syntax:**

```jsx
const result = originalArray.reduce(
  (accumulator, currentValue, index, array) => {
    return updatedAccumulator;
  },
  initialValue
);
```

### **Example:**

```jsx
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

### **Use Case:**

- Summing numbers
- Counting occurrences
- Grouping data
- Creating totals (e.g., cart totals in shopping apps)

---

## 📌 Summary Table

| Function   | Purpose                      | Returns   | Use Case                    |
| ---------- | ---------------------------- | --------- | --------------------------- |
| `map()`    | Transform each element       | New array | Apply discount, format data |
| `filter()` | Select elements by condition | New array | Active users, valid entries |
| `reduce()` | Combine into one value       | Any type  | Totals, aggregation         |
