// main.mjs

// Import named functions
import { add, subtract, multiply, divide } from "./mathUtils.mjs";

// Import default class
import Rectangle from "./geometryUtils.mjs";

// Use math functions
console.log("Addition:", add(6, 4)); // 10
console.log("Subtraction:", subtract(10, 6)); // 4
console.log("Multiplication:", multiply(4, 6)); // 24
console.log("Division:", divide(8, 4)); // 2

// Use the Rectangle class
const rect = new Rectangle(5, 3);
console.log("Rectangle Area:", rect.getArea()); // 15
