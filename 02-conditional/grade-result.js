// A - 90 & above; B - 75+;  C - 60+; D-40+; E<40

// Initialize the percentage value
let percent = 62;
// Initialize an empty string to store the grade
let grade = "";

// Use if-else if-else statements to determine the grade based on the percentage
if (percent >= 90) {
  grade = "A";
} else if (percent >= 75) {
  grade = "B";
} else if (percent >= 60) {
  grade = "C";
} else if (percent >= 40) {
  grade = "D";
} else {
  grade = "E";
}

// Use switch-case to determine the result message based on the grade
let result = "";
switch (grade) {
  case "A":
    // If grade is A, assign distinction message
    result = "You scored distinction";
    break;
  case "B":
    // If grade is B, assign first class message
    result = "You scored first class";
    break;
  case "C":
    // If grade is C, assign second class message
    result = "You scored second class";
    break;
  case "D":
    // If grade is D, assign pass class message
    result = "You scored pass class";
    break;
  case "E":
    // If grade is E, assign failed message
    result = "You failed";
    break;
  default:
    // If grade is not recognized, assign invalid message
    result = "Grade is invalid";
    break;
}

// Print the obtained grade to the console
console.log(`Grade Obtained - ${grade}`);
// Print the result message to the console
console.log(`Result - ${result}`);