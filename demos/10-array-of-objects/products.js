let products = [
  { name: "Laptop", price: 900 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 150 },
];

// Print name and price of each product
products.forEach((p) => {
  console.log(`${p.name}: ₹${p.price}`);
});

// Filter products above ₹100
let expensive = products.filter((p) => p.price > 100);
console.log("Expensive Products:", expensive);
