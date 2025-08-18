let products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 50, quantity: 12 },
  { name: "Bag", price: 800, quantity: 3 }
];

// Products with quantity < 5
let lowStock = products.filter(p => p.quantity < 5);
console.log("Low Stock Products:", lowStock);

// Increase price by 10%
let updatedProducts = products.map(p => ({
  name: p.name,
  price: p.price * 1.1,
  quantity: p.quantity
}));
console.log("Updated Prices:", updatedProducts);

// Total value of each product
products.forEach(p => {
  let total = p.price * p.quantity;
  console.log(`${p.name} stock value: ₹${total}`);
});
