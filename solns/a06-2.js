let shoppingList = ["Eggs", "Bread", "Butter", "Cheese"];

console.log("Total items:", shoppingList.length);

if (!shoppingList.includes("Milk")) {
  shoppingList.unshift("Milk");
}

console.log("Final Shopping List:", shoppingList);