import { Router } from 'express';
import { createInvestment, getInvestments, getInvestmentsSummary } from '../controllers/investment.controller';

const router = Router();
router.post('/', createInvestment);
router.get('/', getInvestments);
router.get("/summary", getInvestmentsSummary);

export default router;