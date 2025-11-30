import * as SaleRepo from "../repositories/sale.repo";
import { calculateProfit } from "../utils/profit";

export const addSale = async (data: any) => {
  const profit = calculateProfit(data.salePrice, data.costPrice, data.quantity);
  return SaleRepo.createSale({ ...data, profit });
};

export const getSummary = async () => {
  const sales = await SaleRepo.getSales();

  const totalSold = sales.reduce((sum, s) => sum + s.quantity, 0);
  const totalProfit = sales.reduce((sum, s) => sum + s.profit, 0);

  return { totalSold, totalProfit };
};

export const listSales = async () => SaleRepo.getSales();
