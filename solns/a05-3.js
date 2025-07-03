function countVowels(word) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("AEIOU")); // Output: 5
console.log(countVowels("xyz")); // Output: 0
