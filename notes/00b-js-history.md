## 📜 **History of JavaScript**

| 📅 Year          | 📌 Milestone                                                                                                                                                                                                                      |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1995**         | JavaScript was created by **Brendan Eich** at Netscape in just **10 days**. It was originally called **Mocha**, then renamed to **LiveScript**, and finally **JavaScript** (for marketing reasons, to ride on Java’s popularity). |
| **1997**         | JavaScript was submitted to **ECMA International**. The first standardized version was published as **ECMAScript 1 (ES1)**.                                                                                                       |
| **1999-2009**    | Minor updates with **ES2 (1998)** and **ES3 (1999)**. ES4 was abandoned due to complexity.                                                                                                                                        |
| **2009**         | **ES5** was released with major features like `strict mode`, `JSON`, `Array.prototype.forEach`, etc.                                                                                                                              |
| **2015**         | **ES6 (ECMAScript 2015)** was a huge upgrade with many new features that modernized JavaScript.                                                                                                                                   |
| **2016–Present** | New versions are released **yearly** (ES2016, ES2017, etc.) with incremental improvements.                                                                                                                                        |

---

## ⚙️ **What is ECMAScript (ES)?**

ECMAScript (ES) is the **standardized version** of JavaScript defined by **ECMA International**. JavaScript is the most popular implementation of ECMAScript.

---

## 🚀 **ES6 (ECMAScript 2015) – Major Upgrade**

ES6 was the **biggest update** in JavaScript's history and brought powerful features for developers.

### ✅ **Key Features of ES6**

1. **`let` and `const`** – Block-scoped variable declarations.

2. **Arrow Functions** – Shorter function syntax.

   ```js
   const add = (a, b) => a + b;
   ```

3. **Template Literals** – Using backticks and `${}` for dynamic strings.

   ```js
   let name = "Ali";
   console.log(`Hello, ${name}`);
   ```

4. **Default Parameters** – Set default values in functions.

   ```js
   function greet(name = "Guest") {
     console.log("Hello " + name);
   }
   ```

5. **Destructuring** – Extract values from arrays or objects.

   ```js
   const [a, b] = [1, 2];
   const {name, age} = {name: "Sara", age: 20};
   ```

6. **Classes** – Cleaner OOP syntax.

   ```js
   class Person {
     constructor(name) {
       this.name = name;
     }
   }
   ```

7. **Modules** – `import` and `export` for modular code.

8. **Promises** – Built-in support for asynchronous programming.

---

## 📦 **ES2016 (ECMAScript 2016)**

A smaller update than ES6. It introduced **only two** new features:

1. ✅ **`Array.prototype.includes()`**

   ```js
   const nums = [1, 2, 3];
   console.log(nums.includes(2)); // true
   ```

2. ✅ **Exponentiation Operator (`**`)**

   ```js
   console.log(2 ** 3); // 8 (same as Math.pow(2, 3))
   ```

---

## ✅ Summary Table

| Version    | Year | Key Features                                                |
| ---------- | ---- | ----------------------------------------------------------- |
| ES5        | 2009 | `strict`, `JSON`, `forEach`, etc.                           |
| **ES6**    | 2015 | `let`, `const`, arrow functions, classes, modules, promises |
| **ES2016** | 2016 | `includes()`, `**` operator                                 |
