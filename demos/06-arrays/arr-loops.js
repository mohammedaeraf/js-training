let students = ["Hussain", "Aslam", "Ashaar", "Abdullaah"];

// for loop
for (let i = 0; i < students.length; i++) {
  console.log(`Student #${i + 1} => ${students[i]}`);
}

// for-in loop
for (let i in students) {
  console.log(`Student # ${i} => ${students[i]}`);
}

// for-of loop
let sales = [1000, 2000, 6000];
let totalSales = 0;
for (let sale of sales) {
  totalSales = totalSales + sale;
}

// forEach
sales.forEach((sale) => {
  totalSales = totalSales + sale;
});
console.log(totalSales);
