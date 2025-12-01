"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSales = exports.createSale = void 0;
const Sale_1 = __importDefault(require("../models/Sale"));
const createSale = async (data) => Sale_1.default.create(data);
exports.createSale = createSale;
const getSales = async () => Sale_1.default.find().populate('business');
exports.getSales = getSales;
