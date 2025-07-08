// Product Class Definition
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalValue() {
    return this.price * this.quantity;
  }

  applyDiscount(discountPercentage) {
    let discountAmount = (this.price * discountPercentage) / 100;
    this.price -= discountAmount;
  }

  restock(newQuantity) {
    this.quantity += newQuantity;
  }

  // Bonus Method 1: Check if out of stock
  isOutOfStock() {
    return this.quantity === 0;
  }

  // Bonus Method 2: Display all product details
  displayProductDetails() {
    console.log(`--- Product Details ---
Name     : ${this.name}
Price    : ₹${this.price.toFixed(2)}
Quantity : ${this.quantity}
In Stock : ${this.isOutOfStock() ? "No" : "Yes"}
Total Value: ₹${this.calculateTotalValue().toFixed(2)}
------------------------`);
  }
}

const product1 = new Product("Laptop", 900, 5);
const product2 = new Product("Smartphone", 700, 8);
const product3 = new Product("Shoes", 120, 15);

// Total Value
console.log("Total Value of Product 1:", product1.calculateTotalValue()); // 4500

// Apply Discount on product2
product2.applyDiscount(10);
console.log("Updated Price of Product 2 after 10% discount:", product2.price); // 630

// Restock product3
product3.restock(10);
console.log("Updated Quantity of Product 3 after restock:", product3.quantity); // 25

// Bonus Usage
console.log("\n📦 Bonus: Displaying Product Details\n");
product1.displayProductDetails();
product2.displayProductDetails();
product3.displayProductDetails();
