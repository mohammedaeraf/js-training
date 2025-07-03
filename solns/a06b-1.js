// step 1 - create an array
// step 2 - create a function to calculate factorial
// step 3 -  Use a loop to print factorial of all the 5 numbers.
let numbers = [7, 8, 10];

function calcFact(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

for (const number of numbers) {
  console.log(`Factorial of ${number} = ${calcFact(number)}`);
}
