let fruits = ["Apple", "Banana", "Mango"];

let numbers = [10, 20, 30, 40];         // Array of numbers
let names = ["Alice", "Bob", "Charlie"]; // Array of strings
let mixed = [42, "Hello", true];        // Mixed types

let colors = ["Red", "Green", "Blue"];
console.log(colors[1]); // Output: Green

let languages = ["HTML", "CSS", "JS"];
languages[2] = "JavaScript";

let animals = ["Dog", "Cat", "Lion"];
console.log(animals.length); // Output: 3


let nums = [1, 2, 3];
nums.push(4);     // [1, 2, 3, 4]
nums.pop();       // [1, 2, 3]


let queue = ["A", "B"];
queue.unshift("Start"); // ["Start", "A", "B"]
queue.shift();          // ["A", "B"]


let items = ["Pen", "Pencil"];
console.log(items.indexOf("Pencil")); // 1
console.log(items.includes("Eraser")); // false


let arr = [10, 20, 30, 40];
let part = arr.slice(1, 3); // [20, 30]


let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); // [1, 2, 3, 4]


let names2 = ["Tom", "Jerry"];
for (let i = 0; i < names2.length; i++) {
  console.log(names2[i]);
}

for (let name of names) {
  console.log(name);
}


names.forEach((n) => console.log(n));


function printArray(arr) {
  arr.forEach((item) => console.log(item));
}

printArray(["Apple", "Banana", "Mango"]);