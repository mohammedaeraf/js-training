let numbers = [5, -3, 0, 9, -1, 0, 7];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let num of numbers) {
  if (num > 0) {
    positiveCount++;
  } else if (num < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
}

console.log(`Positive: ${positiveCount}`);
console.log(`Negative: ${negativeCount}`);
console.log(`Zero: ${zeroCount}`);
