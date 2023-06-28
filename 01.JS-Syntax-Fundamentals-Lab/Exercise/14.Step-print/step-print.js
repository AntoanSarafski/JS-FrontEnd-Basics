function printStep(arr, step) {
  let resultArray = [];
  for (let index = 0; index < arr.length; index += step) {
    resultArray.push(arr[index]);
  }
  console.log(resultArray);
}

printStep(["1", "2", "3", "4", "5"], 6);
