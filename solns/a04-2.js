let n = 10; // You can change this to print more or fewer numbers
let a = 0, b = 1, count = 0;

while (count < n) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
  count++;
}
