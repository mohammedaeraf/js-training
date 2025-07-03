// 1. String Declaration
let name = "John";
let greeting = 'Hello';
let message = `Welcome, ${name}`;

// 2. Concatenation with Template Literals
let firstName = "Aisha";
let lastName = 'Khan';
let fullName = `${firstName} ${lastName}`;
console.log("Full Name:", fullName);

// 3. length
let str = "JavaScript";
console.log("Length:", str.length); // 10

// 4. toUpperCase and toLowerCase
let word = "hello";
console.log("Uppercase:", word.toUpperCase()); // "HELLO"
console.log("Lowercase:", word.toLowerCase()); // "hello"

// 5. charAt
let lang = "JavaScript";
console.log("First character:", lang.charAt(0)); // "J"

// 6. indexOf and lastIndexOf
let text = "banana";
console.log("First 'a':", text.indexOf("a"));       // 1
console.log("Last 'a':", text.lastIndexOf("a"));    // 5

// 7. includes
let msg = "Welcome to JS";
console.log("Includes 'JS':", msg.includes("JS")); // true

// 8. slice
let phrase = "JavaScript is fun";
console.log("Slice (0, 10):", phrase.slice(0, 10)); // "JavaScript"

// 9. substring
console.log("Substring (0, 10):", phrase.substring(0, 10)); // "JavaScript"

// 10. trim
let messy = "   Hello   ";
console.log("Trimmed:", messy.trim()); // "Hello"

// 11. replace
let str2 = "I like JavaScript";
console.log("Replaced:", str2.replace("JavaScript", "Python")); // "I like Python"

// 12. split
let sentence = "Apple, Banana, Mango";
let fruits = sentence.split(", ");
console.log("Fruits Array:", fruits); // ["Apple", "Banana", "Mango"]

// 13. concat
let a = "Good ";
let b = "Morning";
console.log("Concatenated:", a.concat(b)); // "Good Morning"

// 14. Template Literal Example
let user = "Sara";
let greet = `Hello, ${user}!`;
console.log(greet); // "Hello, Sara!"

// 15. Practice Challenge – Extract username from email
let email = "  student@example.com  ";
let trimmedEmail = email.trim();
let username = trimmedEmail.slice(0, trimmedEmail.indexOf("@"));
console.log(`Username: ${username}`); // "student"
