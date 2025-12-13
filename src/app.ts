import express from "express";
import cors from "cors";

import businessRoutes from "./routes/business.routes";
import investmentRoutes from "./routes/investment.routes";
import saleRoutes from "./routes/sale.routes";
import config from "./config";

const app = express();

app.use(
  cors({
    origin: ["https://maya-rong-frontend-v7iw.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.options(/(.*)/, cors());
app.use(express.json());

app.use("/api/v1/businesses", businessRoutes);
app.use("/api/v1/investments", investmentRoutes);
app.use("/api/v1/sales", saleRoutes);

app.get("/", (req, res) => {
  res.send("Business Management API");
});

export default app;
