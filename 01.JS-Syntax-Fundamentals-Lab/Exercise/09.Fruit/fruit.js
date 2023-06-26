function calculateFruitPrice(typeFruit, weightInGrams, pricePerKilo) {
  const weightInKilo = (weightInGrams / 1000).toFixed(2);
  const totalPrice = (weightInKilo * pricePerKilo).toFixed(2);

  console.log(
    `I need $${totalPrice} to buy ${weightInKilo} kilograms ${typeFruit}`
  );
}

calculateFruitPrice("orange", 2500, 1.8);
