import { Request, Response } from "express";
import * as BusinessService from "../services/business.service";

export const createBusiness = async (req: Request, res: Response) => {
  try {
    const created = await BusinessService.addBusiness(req.body);
    return res.status(201).json(created);
  } catch (err: any) {
    console.error("createBusiness error:", err);
    return res
      .status(err?.status || 500)
      .json({ message: err?.message || "Failed to create business" });
  }
};

export const getBusinesses = async (_req: Request, res: Response) => {
  try {
    const list = await BusinessService.listBusinesses();
    return res.json(list);
  } catch (err: any) {
    console.error("getBusinesses error:", err);
    return res
      .status(500)
      .json({ message: err?.message || "Failed to load businesses" });
  }
};
