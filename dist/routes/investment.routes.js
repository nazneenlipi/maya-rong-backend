"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const investment_controller_1 = require("../controllers/investment.controller");
const router = (0, express_1.Router)();
router.post('/', investment_controller_1.createInvestment);
router.get('/', investment_controller_1.getInvestments);
router.get("/summary", investment_controller_1.getInvestmentsSummary);
exports.default = router;
