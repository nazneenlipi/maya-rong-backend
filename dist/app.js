"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const business_routes_1 = __importDefault(require("./routes/business.routes"));
const investment_routes_1 = __importDefault(require("./routes/investment.routes"));
const sale_routes_1 = __importDefault(require("./routes/sale.routes"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["https://maya-rong-frontend-v7iw.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.options("*", (0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1/businesses", business_routes_1.default);
app.use("/api/v1/investments", investment_routes_1.default);
app.use("/api/v1/sales", sale_routes_1.default);
app.get("/", (req, res) => {
    res.send("Business Management API");
});
// Database connection
// It's safe to connect here for Vercel (connection reuse). 
// Ensure MONGO_URI is set in Vercel Environment Variables.
mongoose_1.default
    .connect(config_1.default.database_url)
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection error:", err));
exports.default = app;
