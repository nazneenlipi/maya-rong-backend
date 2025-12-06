// import dotenv from 'dotenv';
// import app from './app';
// import { connectDB } from './config/db';

// dotenv.config();
// const PORT = process.env.PORT || 5000;

// connectDB();
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import businessRoutes from "./routes/business.routes";
import investmentRoutes from "./routes/investment.routes";
import saleRoutes from "./routes/sale.routes";
import config from "./config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/businesses", businessRoutes);
app.use("/api/v1/investments", investmentRoutes);
app.use("/api/v1/sales", saleRoutes);

app.get("/", (req, res) => {
  res.send("Business Management API");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// Database connection
mongoose
  .connect(config.database_url!)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// 🔁 Serverless function export
export default app;
