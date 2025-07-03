function printPattern(ch, lines) {
  for (let i = 1; i <= lines; i++) {
    console.log(ch.repeat(i));
  }
}
printPattern("*", 5);
printPattern("#", 3);
