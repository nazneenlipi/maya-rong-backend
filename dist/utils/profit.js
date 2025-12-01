"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateProfit = void 0;
const calculateProfit = (salePrice, costPrice, quantity) => {
    return (salePrice - costPrice) * quantity;
};
exports.calculateProfit = calculateProfit;
