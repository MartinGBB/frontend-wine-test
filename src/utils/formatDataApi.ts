export const formatPrice = (price: number) => {
  const priceDecimal = price.toFixed(2);
  const formatPrice = priceDecimal.toString().replace('.', ',');
  return formatPrice;
};
