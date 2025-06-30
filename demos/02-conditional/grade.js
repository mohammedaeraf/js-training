// A - 90 & above; B - 75+;  C - 60+; D-40+; E<40

// Initialize the percentage value
let percent = 38.45;
// Initialize an empty string to store the grade
let grade = "";

// Use if-else if-else statements to determine the grade based on the percentage
if (percent >= 90) {
  // If percent is 90 or above, assign grade "A"
  grade = "A";
} else if (percent >= 75) {
  // If percent is 75 or above but less than 90, assign grade "B"
  grade = "B";
} else if (percent >= 60) {
  // If percent is 60 or above but less than 75, assign grade "C"
  grade = "C";
} else if (percent >= 40) {
  // If percent is 40 or above but less than 60, assign grade "D"
  grade = "D";
} else {
  // If percent is less than 40, assign grade "E"
  grade = "E";
}

// Print the obtained grade to the console
console.log(`Grade Obtained - ${grade}`);
