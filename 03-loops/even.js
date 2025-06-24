// Initialize an empty string to store the even numbers
let str = "";

// Loop from 2 to 30, incrementing by 2 each time to get only even numbers
for (let i = 2; i <= 30; i = i + 2) {
  // Append the current even number and a space to the string
  str = str + i + " "; // "2 4 6 ..."
}
// Print the resulting string of even numbers to the console
console.log(str);