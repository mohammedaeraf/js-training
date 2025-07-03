
# 📘 Strings Tutorial

---

## 🔹 What Is a String?

A **string** is a sequence of characters enclosed in quotes:

```javascript
let name = "John";
let greeting = 'Hello';
let message = `Welcome, ${name}`; // Template literal
```

JavaScript supports:

* **Single quotes** `'Hello'`
* **Double quotes** `"Hello"`
* **Backticks** `` `Hello ${name}` `` (used for template literals)

---

## 🔹 String Declaration Examples

```javascript
let firstName = "Aisha";
let lastName = 'Khan';
let fullName = `${firstName} ${lastName}`;
```

---

## 🔹 Commonly Used String Functions

---

### 1️⃣ `length`

Returns the number of characters in the string.

```javascript
let str = "JavaScript";
console.log(str.length); // 10
```

---

### 2️⃣ `toUpperCase()` / `toLowerCase()`

Converts string to uppercase or lowercase.

```javascript
let name = "hello";
console.log(name.toUpperCase()); // "HELLO"
console.log(name.toLowerCase()); // "hello"
```

---

### 3️⃣ `charAt(index)`

Returns the character at the given index.

```javascript
let lang = "JavaScript";
console.log(lang.charAt(0)); // "J"
```

---

### 4️⃣ `indexOf(substring)` / `lastIndexOf(substring)`

Finds the position of a substring.

```javascript
let text = "banana";
console.log(text.indexOf("a"));       // 1 (first 'a')
console.log(text.lastIndexOf("a"));   // 5 (last 'a')
```

---

### 5️⃣ `includes(substring)`

Checks if the string contains the given substring.

```javascript
let msg = "Welcome to JS";
console.log(msg.includes("JS")); // true
```

---

### 6️⃣ `slice(start, end)`

Extracts a portion of the string.

```javascript
let phrase = "JavaScript is fun";
console.log(phrase.slice(0, 10)); // "JavaScript"
```

---

### 7️⃣ `substring(start, end)`

Similar to `slice`, but doesn't accept negative indexes.

```javascript
console.log(phrase.substring(0, 10)); // "JavaScript"
```

---

### 8️⃣ `trim()`

Removes spaces from the start and end.

```javascript
let messy = "   Hello   ";
console.log(messy.trim()); // "Hello"
```

---

### 9️⃣ `replace(search, replace)`

Replaces the first match.

```javascript
let str = "I like JavaScript";
console.log(str.replace("JavaScript", "Python")); // "I like Python"
```

> ✅ To replace all matches, use regex with `/g` flag.

---

### 🔟 `split(separator)`

Splits a string into an array.

```javascript
let sentence = "Apple, Banana, Mango";
let fruits = sentence.split(", ");
console.log(fruits); // ["Apple", "Banana", "Mango"]
```

---

### 11️⃣ `concat()`

Joins two or more strings.

```javascript
let a = "Good ";
let b = "Morning";
console.log(a.concat(b)); // "Good Morning"
```

---

## 🔹 Template Literals (Backticks)

Allow embedding expressions using `${}`.

```javascript
let user = "Sara";
let greet = `Hello, ${user}!`;
console.log(greet); // "Hello, Sara!"
```

---

## 🧠 Practice Challenge

```javascript
let email = "  student@example.com  ";
let trimmedEmail = email.trim();
let username = trimmedEmail.slice(0, trimmedEmail.indexOf("@"));
console.log(`Username: ${username}`); // Output: "Username: student"
```

---

## 📋 Summary of String Functions

| Function        | Description                  |
| --------------- | ---------------------------- |
| `length`        | Returns number of characters |
| `toUpperCase()` | Converts to uppercase        |
| `toLowerCase()` | Converts to lowercase        |
| `charAt(i)`     | Character at position i      |
| `indexOf()`     | Position of substring        |
| `includes()`    | Checks if substring exists   |
| `slice()`       | Extracts part of string      |
| `trim()`        | Removes whitespace from ends |
| `replace()`     | Replaces a substring         |
| `split()`       | Converts string to array     |
| `concat()`      | Joins strings                |
