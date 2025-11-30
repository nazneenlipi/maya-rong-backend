// controllers/investment.controller.ts
import { Request, Response } from "express";
import * as InvestmentService from "../services/investment.service";

export const createInvestment = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    // delegate validation + creation to service layer
    const created = await InvestmentService.createInvestment(payload);
    return res.status(201).json(created);
  } catch (err: any) {
    console.error("createInvestment error:", err);
    return res.status(err?.status || 400).json({
      message: err?.message || "Failed to create investment",
    });
  }
};

export const getInvestments = async (_req: Request, res: Response) => {
  try {
    const investments = await InvestmentService.listInvestments();
    return res.json(investments);
  } catch (err: any) {
    console.error("getInvestments error:", err);
    return res.status(500).json({
      message: err?.message || "Failed to load investments",
    });
  }
};
