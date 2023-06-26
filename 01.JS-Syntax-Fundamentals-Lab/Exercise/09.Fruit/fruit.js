function calculateFruitPrice(typeFruit, weightInGrams, pricePerKilo) {
  const weightInKilo = weightInGrams / 1000;
  const totalPrice = weightInKilo * pricePerKilo;

  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${weightInKilo.toFixed(
      2
    )} kilograms ${typeFruit}`
  );
}

calculateFruitPrice("orange", 2500, 1.8);
