function Sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Invalid input types.");
  } else {
    console.log(num1 + num2);
  }
}

Sum(1, 2);
