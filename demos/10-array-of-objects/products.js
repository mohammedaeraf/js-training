let products = [
  { name: "Laptop", price: 900, stock: 20 },
  { name: "Mouse", price: 25, stock: 100 },
  { name: "Monitor", price: 150, stock: 50 },
];

// Print name and price of each product
products.forEach((p) => {
  console.log(`${p.name}: ₹${p.price}`);
});

// Filter products above ₹100
let expensive = products.filter((p) => p.price > 100);
console.log("Expensive Products:", expensive);

// Find total value of Inventory in Warehouse/Store
let inventoryValue = products.reduce(
  (total, product) => total + (product.price * product.stock),
  0
);
console.log(`Total Value of Inventory in Warehouse = ${inventoryValue}`);
