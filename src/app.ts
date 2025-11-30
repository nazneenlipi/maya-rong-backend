import express from 'express';
import cors from 'cors';
import businessRoutes from './routes/business.routes';
import investmentRoutes from './routes/investment.routes';
import saleRoutes from './routes/sale.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/businesses', businessRoutes);
app.use('/api/v1/investments', investmentRoutes);
app.use('/api/v1/sales', saleRoutes);

export default app;
