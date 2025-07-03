let scores = [78, 92, 85, 60, 95];

scores.forEach((score) => {
  let result = score >= 70 ? "Pass" : "Fail";
  console.log(`Score: ${score} → ${result}`);
});