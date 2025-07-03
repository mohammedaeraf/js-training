let firstName = "  Ali  ";
let lastName = "Khan";

firstName = firstName.trim().toUpperCase();
lastName = lastName.trim().toUpperCase();

let fullName = `${firstName} ${lastName}`;
console.log("Full Name:", fullName); // Full Name: ALI KHAN
