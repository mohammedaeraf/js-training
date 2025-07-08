# 📘 Object-Oriented Programming (OOP) in JavaScript

---

## 🔰 What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm based on the concept of **objects**, which can contain **data (properties)** and **code (methods)**.

In JavaScript, OOP is supported through:

- **Objects**
- **Classes**
- **Prototypes**

---

## 🔹 1. Creating an Object (Object Literal)

```javascript
let car = {
  brand: "Toyota",
  model: "Camry",
  start: function () {
    console.log("Car started");
  },
};

console.log(car.brand); // Toyota
car.start(); // Car started
```

---

## 🔹 2. `class`

```javascript
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  display() {
    console.log(`${this.name} is in grade ${this.grade}`);
  }
}

let s1 = new Student("Sara", 10);
s1.display(); // Sara is in grade 10
```

---

## 🔹 3. Adding Methods to a Class

```javascript
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

  describe() {
    console.log(`Rectangle of ${this.length}x${this.width}`);
  }
}

let r1 = new Rectangle(5, 3);
console.log("Area:", r1.area()); // Area: 15
r1.describe(); // Rectangle of 5x3
```

---

## 📝 Summary Table

| Concept        | Description                     |
| -------------- | ------------------------------- |
| Object Literal | Quick object creation           |
| Class          | ES6 syntax to define blueprints |
| Method         | Functions inside classes        |
