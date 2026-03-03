let name = "   Lenovo   "; // array of chars
console.log(name);
console.log(name.length);

let trimmedName = name.trim();
console.log(trimmedName);
console.log(trimmedName.length);

console.log(trimmedName.toUpperCase());
console.log(trimmedName.toLowerCase());

console.log(trimmedName.indexOf("n"));

let courseTitle = "Frontend Development using Angular";
let newCourseTitle = courseTitle.replace("Angular", "React");

console.log(newCourseTitle);

let position = courseTitle.indexOf("Angular");
console.log(position);

let coursePart = courseTitle.substring(27, 35);
console.log(coursePart);

console.log(courseTitle.charAt(27));
let firstName = "Abdullaah";
let lastName = "Askeri";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

let topics = "JavaScript, TypeScript,React JS";
let topicsArray = topics.split(",");
console.log(topicsArray);

let course2 = "Frontend Dev with React";
console.log(course2.includes("VueJS"));
