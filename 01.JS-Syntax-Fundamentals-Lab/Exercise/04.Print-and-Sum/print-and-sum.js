function PrintNumsAndSum(start, end) {
  let numbers = [];
  let sum = 0;

  for (let index = start; index <= end; index++) {
    numbers.push(index);
    sum += index;
  }
  console.log(numbers.join(" "));
  console.log(`Sum: ${sum}`);
}

PrintNumsAndSum(5, 10);
