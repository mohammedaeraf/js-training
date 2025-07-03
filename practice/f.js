const numbers = [4, 7, 12, 15, 9];
let numbers2 = numbers.map((n) => (n % 2 == 0 ? n * 2 : n + 1));
console.log(numbers2);

// const numbers = [4, 7, 12, 15, 9];
// console.log([1, 2, 5, 4].map((n) => (n % 2 == 0 ? n * 2 : n + 1)));
