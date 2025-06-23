// A - 90 & above; B - 75+;  C - 60+; D-40+; E<40

let percent = 62;
let grade = "";

// if elseif
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

// switch-case
let result = "";
switch (grade) {
  case "A":
    result = "You scored distinction";
    break;
  case "B":
    result = "You scored first class";
    break;
  case "C":
    result = "You scored second class";
    break;
  case "D":
    result = "You scored pass class";
    break;
  case "E":
    result = "You failed";
    break;
  default:
    result = "Grade is invalid";
    break;
}

console.log(`Grade Obtained - ${grade}`);
console.log(`Result - ${result}`);
