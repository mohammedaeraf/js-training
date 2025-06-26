let rem3, rem5;
for (let i = 1; i <= 50; i++) {
  rem3 = i % 3; // 3, 6, 9
  rem5 = i % 5; // 5, 10,15...
  if (rem3 == 0 && rem5 == 0) {
    console.log("FizzBuzz");
  } else if (rem3 == 0) {
    console.log("Fizz");
  } else if (rem5 == 0) {
    console.log("Buzz");
  } else {
    console.log(`${i}`);
  }
}

// 15 - divisible by 3?
// 15 - divisible by
