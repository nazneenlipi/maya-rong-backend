export const calculateProfit = (salePrice: number, costPrice: number, quantity: number): number => {
  return (salePrice - costPrice) * quantity;
};
