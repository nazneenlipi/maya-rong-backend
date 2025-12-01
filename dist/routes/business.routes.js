"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const business_controller_1 = require("../controllers/business.controller");
const router = (0, express_1.Router)();
router.post('/', business_controller_1.createBusiness);
router.get('/', business_controller_1.getBusinesses);
exports.default = router;
