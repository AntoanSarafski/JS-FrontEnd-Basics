function SortNamesAlphabetically(arrNames) {
  let names = [...arrNames];

  names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  for (let index = 1; index <= names.length; index++) {
    console.log(`${index}.${names[index - 1]}`);
  }
}

SortNamesAlphabetically(["John", "Bob", "Christina", "Ema"]);
