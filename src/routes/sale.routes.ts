import { Router } from "express";
import {
  createSale,
  getSales,
  getSalesSummary,
} from "../controllers/sale.controller";

const router = Router();
router.post("/", createSale);
router.get("/", getSales);
router.get("/summary", getSalesSummary);
export default router;
