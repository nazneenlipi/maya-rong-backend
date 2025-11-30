import { Request, Response } from 'express';
import * as BusinessService from '../services/business.service';

export const createBusiness = async (req: Request, res: Response) => {
  const business = await BusinessService.addBusiness(req.body);
  res.status(201).json(business);
};

export const getBusinesses = async (_req: Request, res: Response) => {
  const businesses = await BusinessService.listBusinesses();
  res.json(businesses);
};