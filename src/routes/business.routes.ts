import { Router } from 'express';
import { createBusiness, getBusinesses } from '../controllers/business.controller';

const router = Router();
router.post('/', createBusiness);
router.get('/', getBusinesses);

export default router;