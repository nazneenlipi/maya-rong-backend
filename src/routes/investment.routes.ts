import { Router } from 'express';
import { createInvestment, getInvestments } from '../controllers/investment.controller';

const router = Router();
router.post('/', createInvestment);
router.get('/', getInvestments);

export default router;