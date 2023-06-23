function Sum(num1, num2) {
  if (typeof num1 == "number" || typeof num2 !== "number") {
    console.log("Wrong input types.");
  } else {
    console.log(num1 + num2);
  }
}

let numForPrint = Sum("1", "2");
console.log(numForPrint);
