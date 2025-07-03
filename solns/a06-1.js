let movies = ["Inception", "Titanic", "Avengers", "The Dark Knight", "Jumanji"];

console.log("First Movie:", movies[0]);
console.log("Last Movie:", movies[movies.length - 1]);

movies.push("Interstellar");
console.log("After push:", movies);

movies.shift();
console.log("After shift:", movies);

