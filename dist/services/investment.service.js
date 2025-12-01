"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummary = exports.listInvestments = exports.createInvestment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const InvestmentRepo = __importStar(require("../repositories/investment.repo"));
const Business_1 = __importDefault(require("../models/Business"));
const createInvestment = async (data) => {
    if (!data.business) {
        throw { status: 400, message: "business is required" };
    }
    let businessId = "";
    let businessName = "";
    // CASE 1: business is an ObjectId
    if (mongoose_1.default.isValidObjectId(data.business)) {
        const found = await Business_1.default.findById(data.business);
        if (!found) {
            throw { status: 400, message: "Business ID not found" };
        }
        businessId = found._id.toString();
        businessName = found.name;
    }
    // CASE 2: business is a name → find by name
    else {
        const found = await Business_1.default.findOne({ name: data.business.trim() });
        if (!found) {
            throw {
                status: 400,
                message: `Business with name "${data.business}" not found.`,
            };
        }
        businessId = found._id.toString();
        businessName = found.name;
    }
    const payload = {
        investorName: data.investorName,
        description: data.description || "",
        business: businessId,
        businessName: businessName, // <-- SAVE NAME HERE
        date: data.date ? new Date(data.date) : new Date(),
        amount: Number(data.amount),
        category: data.category,
        createdBy: data.createdBy,
    };
    return InvestmentRepo.createInvestment(payload);
};
exports.createInvestment = createInvestment;
const listInvestments = async () => {
    return InvestmentRepo.getInvestments();
};
exports.listInvestments = listInvestments;
const getSummary = async () => {
    const investments = await InvestmentRepo.getInvestments();
    const monthly = {};
    for (const inv of investments) {
        const date = new Date(inv.date);
        const month = date.toLocaleString("en-US", {
            month: "short",
            year: "numeric",
        });
        monthly[month] = (monthly[month] || 0) + (inv.amount ?? 0);
    }
    return Object.entries(monthly).map(([month, total]) => ({
        month,
        total,
    }));
};
exports.getSummary = getSummary;
