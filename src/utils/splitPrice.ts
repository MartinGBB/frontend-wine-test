export const splitPrice = (price: number) => {
  const separateString = price.toFixed(2).toString().split('.');
  const newPrice = {
    priceInt: separateString[0],
    pricePennies: separateString[1],
  };
  console.log(newPrice)
  return newPrice;
};
