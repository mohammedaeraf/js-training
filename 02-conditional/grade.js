// A - 90 & above; B - 75+;  C - 60+; D-40+; E<40

let percent = 38.45;
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

console.log(`Grade Obtained - ${grade}`);
