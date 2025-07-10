let square = (n) => n * n;

let factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
};

export { square, factorial };
