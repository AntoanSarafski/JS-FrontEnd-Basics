function solve(count, type, day) {
  const prices = {
    Students: {
      Friday: 8.45,
      Saturday: 9.8,
      Sunday: 10.46,
    },
    Business: {
      Friday: 10.9,
      Saturday: 15.6,
      Sunday: 16,
    },
    Regular: {
      Friday: 15,
      Saturday: 20,
      Sunday: 22.5,
    },
  };

  let sum = 0;

  const cost = prices[type][day];
  sum = cost * count;

  if (type === "Students" && count >= 30) {
    sum -= sum * 0.15;
  } else if (type === "Business" && count >= 100) {
    count -= 10;
  } else if (type === "Regular" && count >= 10 && count <= 20) {
    sum -= sum * 0.05;
  }

  console.log(sum);
}

solve(30, "Students", "Sunday");
