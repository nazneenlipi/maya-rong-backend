"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const business_routes_1 = __importDefault(require("./routes/business.routes"));
const investment_routes_1 = __importDefault(require("./routes/investment.routes"));
const sale_routes_1 = __importDefault(require("./routes/sale.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1/businesses', business_routes_1.default);
app.use('/api/v1/investments', investment_routes_1.default);
app.use('/api/v1/sales', sale_routes_1.default);
exports.default = app;
