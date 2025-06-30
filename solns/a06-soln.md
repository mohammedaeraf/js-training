# ✅ Assignment 07 – **Solutions**

---

## 🔹 Problem 1: Favorite Movies

```javascript
let movies = ["Inception", "Titanic", "Avengers", "The Dark Knight", "Jumanji"];

console.log("First Movie:", movies[0]);
console.log("Last Movie:", movies[movies.length - 1]);

movies.push("Interstellar");
console.log("After push:", movies);

movies.shift();
console.log("After shift:", movies);
```

---

## 🔹 Problem 2: Shopping List

```javascript
let shoppingList = ["Eggs", "Bread", "Butter", "Cheese"];

console.log("Total items:", shoppingList.length);

if (!shoppingList.includes("Milk")) {
  shoppingList.unshift("Milk");
}

console.log("Final Shopping List:", shoppingList);
```

---

## 🔹 Problem 3: Numbers and Slicing

```javascript
let numbers = [10, 20, 30, 40, 50, 60];

let middleThree = numbers.slice(2, 5); // index 2 to 4

console.log("Original Array:", numbers);
console.log("Middle Three:", middleThree);
```

---

## 🔹 Problem 4: Combine Two Arrays

```javascript
let frontend = ["HTML", "CSS"];
let backend = ["NodeJS", "Express"];

let fullstack = frontend.concat(backend);

console.log("Full Stack Technologies:", fullstack);
```

---

## 🔹 Problem 5: Loop Through Colors

```javascript
let colors = ["Red", "Green", "Blue", "Yellow"];

console.log("Using for loop:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log("Using for-of loop:");
for (let color of colors) {
  console.log(color);
}
```

---

## 🔹 Bonus Problem: Score Tracker

```javascript
let scores = [78, 92, 85, 60, 95];

scores.forEach((score) => {
  let result = score >= 70 ? "Pass" : "Fail";
  console.log(`Score: ${score} → ${result}`);
});
```
