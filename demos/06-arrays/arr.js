let marks1 = 50;
let marks2 = 55;

// Array can store multiple values
let fruits = ["apple", "banana", "orange"]; // string
let scores = [90, 92, 67, 85];

fruits.push("watermelon");
console.log(fruits);

let score = scores.pop();
// console.log(score);

// console.log(scores[1]);

let queue1 = ["A", "B"];
queue1.unshift("C");
queue1.shift();
// console.log(queue1);

let queue2 = ["C", "D"];

let queue = queue1.concat(queue2);

//
let anotherQueue = queue.slice(1, 3);
console.log(queue);
console.log(anotherQueue);

console.log(fruits.indexOf("orange"));
console.log(fruits.includes("apple"));

// console.log(fruits[0]);
// console.log(scores[3]);

// console.log(scores.length);
