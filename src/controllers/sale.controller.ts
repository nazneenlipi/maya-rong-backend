import { Request, Response } from "express";
import * as SaleService from "../services/sale.service";

export const createSale = async (req: Request, res: Response) => {
  const sale = await SaleService.addSale(req.body);
  res.status(201).json(sale);
};

export const getSales = async (_req: Request, res: Response) => {
  const sales = await SaleService.listSales();
  res.json(sales);
};

export const getSalesSummary = async (_req: Request, res: Response) => {
  try {
    const summary = await SaleService.getSummary();
    return res.json(summary);
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ message: err.message || "Failed to load summary" });
  }
};
