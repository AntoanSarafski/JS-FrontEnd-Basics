function checkIfDigitsAreSame(number) {
  const digits = Array.from(String(number), Number);
  const isConsistent = new Set(digits).size === 1;
  const sum = digits.reduce(function (accumulator, current) {
    return accumulator + current;
  }, 0);

  console.log(isConsistent);
  console.log(sum);
}

checkIfDigitsAreSame(2222222222);
