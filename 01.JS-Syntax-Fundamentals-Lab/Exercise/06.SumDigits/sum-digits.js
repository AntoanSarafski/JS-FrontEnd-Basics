function SumDigits(num) {
  const digitsAsString = num.toString();

  let sum = 0;
  for (let index = 0; index < digitsAsString.length; index++) {
    sum += Number(digitsAsString[index]);
  }
  console.log(sum);
}

SumDigits(123456);
