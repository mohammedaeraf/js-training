function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(findMax(5, 8, 2)); // Output: 8
console.log(findMax(15, 12, 30)); // Output: 30
console.log(findMax(7, 7, 7)); // Output: 7
