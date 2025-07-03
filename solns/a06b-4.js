let numbers = [2, 4, 7, 9, 11];

function isPrime(n) {
  if (n <= 1) {
    console.log(`${n} is not prime`);
    return false;
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      console.log(`${n} is not prime`);
      return false;
    }
  }

  console.log(`${n} is prime`);
}

for (const n of numbers) {
    isPrime(n);
}
