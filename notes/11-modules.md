# 📘 Modules in JavaScript

In JavaScript, modules allow you to break your code into smaller, reusable pieces that can be imported and used across different files. JavaScript modules can export functionality (variables, functions, classes) that other files can import.

There are two types of exports in JavaScript:

1. **Named Exports**: You can export multiple things from a module by naming them.
2. **Default Exports**: You can export a single default entity from a module.

Let’s look at both types of exports, along with how to import them in another file.

### 1. **Named Exports**

With **named exports**, you explicitly export individual pieces of functionality, and the import must reference the exact names.

### **Creating a Module with Named Exports**

```jsx
// file: mathFunctions.js
export const add = (a, b) => {
    return a + b;
};

export const subtract = (a, b) => {
    return a - b;
};

```

Here, the `add` and `subtract` functions are **named exports** from the module `mathFunctions.js`.

### **Importing Named Exports**

```jsx
// file: main.js
import { add, subtract } from './mathFunctions.js';

console.log(add(5, 3));         // Output: 8
console.log(subtract(5, 3));    // Output: 2

```

- The `import` statement brings in the `add` and `subtract` functions using the **same names** as they were exported.
- The curly braces `{}` around `add` and `subtract` indicate that these are named imports.

### **Importing with Aliases (Optional)**

You can import a named export under a different name (alias) if needed.

```jsx
import { add as addition, subtract as subtraction } from './mathFunctions.js';

console.log(addition(5, 3));    // Output: 8
console.log(subtraction(5, 3)); // Output: 2

```

### 2. **Default Exports**

With **default exports**, you can export a single value, class, or function from a module. A module can have only **one default export**.

### **Creating a Module with Default Export**

```jsx
// file: calculator.js
const multiply = (a, b) => {
    return a * b;
};

export default multiply;

```

Here, the `multiply` function is the **default export** from the `calculator.js` module.

### **Importing Default Exports**

```jsx
// file: main.js
import multiply from './calculator.js';

console.log(multiply(5, 3));    // Output: 15

```

- No curly braces are needed when importing a **default export**.
- The name used when importing a default export can be anything, regardless of the name of the exported function or class.

### **Named and Default Exports Together**

You can combine named and default exports in a single module.

```jsx
// file: advancedMath.js
export const divide = (a, b) => {
    return a / b;
};

const square = (x) => {
    return x * x;
};

export default square;

```

- Here, `divide` is a **named export**, and `square` is the **default export**.

### **Importing Both Named and Default Exports**

```jsx
// file: main.js
import square, { divide } from './advancedMath.js';

console.log(square(5));         // Output: 25
console.log(divide(10, 2));     // Output: 5

```

- The default export (`square`) is imported without curly braces, while named exports (`divide`) are imported using curly braces.

### **Complete Example of Both Named and Default Exports**

Let’s combine everything into one larger example.

### **Module: `utils.js`**

```jsx
// file: utils.js

// Named exports
export const greet = (name) => {
    return `Hello, ${name}!`;
};

export const farewell = (name) => {
    return `Goodbye, ${name}!`;
};

// Default export
const message = 'This is a default message.';
export default message;

```

### **Using the Module: `main.js`**

```jsx
// file: main.js

// Importing default export and named exports
import defaultMessage, { greet, farewell } from './utils.js';

console.log(defaultMessage);          // Output: This is a default message.
console.log(greet('Alice'));          // Output: Hello, Alice!
console.log(farewell('Bob'));         // Output: Goodbye, Bob!

```

### **Summary of `export` and `import`**

- **Named Exports**:
    - Can export multiple values.
    - Must use the same name when importing (or alias it).
    - Syntax: `export { value }`.
- **Default Export**:
    - Can export only one default value.
    - Can be imported with any name.
    - Syntax: `export default value`.

### **Key Differences Between Named and Default Exports**

| Feature | Named Export | Default Export |
| --- | --- | --- |
| **Number of exports** | Can have multiple named exports | Only one default export per module |
| **Import syntax** | Must use the exact name (or alias) | Can use any name to import |
| **Curly braces** | Yes, needed when importing | No curly braces when importing |
| **Use case** | Best for exporting multiple utilities | Best for exporting a single main function/class |

By using **modules**, you can keep your JavaScript code organized and maintainable, separating concerns across different files.