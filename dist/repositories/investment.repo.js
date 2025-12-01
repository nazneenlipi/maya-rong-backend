"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvestments = exports.createInvestment = void 0;
const Investment_1 = __importDefault(require("../models/Investment"));
// Keep repository very small — DB access only
const createInvestment = async (data) => {
    return Investment_1.default.create(data);
};
exports.createInvestment = createInvestment;
const getInvestments = async () => {
    return Investment_1.default.find()
        .populate("business") // show business name/id
        .lean(); // return plain objects (faster)
};
exports.getInvestments = getInvestments;
