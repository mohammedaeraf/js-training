const name = "   Aeraf   "; // array of chars
console.log(name);

const trimmedName = name.trim();
console.log(trimmedName);
console.log(trimmedName.length);

console.log(trimmedName.toUpperCase());
console.log(trimmedName.toLowerCase());

// camel casing
console.log(trimmedName.indexOf("r"));

let courseTitle = "Frontend Development using Angular";
let newCourseTitle = courseTitle.replace("Angular", "React");

console.log(newCourseTitle);

let position = courseTitle.indexOf("Angular");
console.log(position);

let coursePart = courseTitle.substring(0, 10);
console.log(coursePart);

console.log(courseTitle.charAt(27));
let firstName = "Abdullaah";
let lastName = "Askeri";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

let topics = "JavaScript,TypeScript,React JS";
let topicsArray = topics.split(",");
console.log(topicsArray);

console.log(newCourseTitle.includes("React"));
