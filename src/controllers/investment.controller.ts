import { Request, Response } from 'express';
import * as InvestmentService from '../services/investment.service';

export const createInvestment = async (req: Request, res: Response) => {
  const investment = await InvestmentService.addInvestment(req.body);
  res.status(201).json(investment);
};

export const getInvestments = async (_req: Request, res: Response) => {
  const investments = await InvestmentService.listInvestments();
  res.json(investments);
};
