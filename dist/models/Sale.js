"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const saleSchema = new mongoose_1.Schema({
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    costPrice: { type: Number, required: true },
    profit: { type: Number, required: true },
    date: { type: Date, required: true },
    business: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Business', required: true },
});
exports.default = (0, mongoose_1.model)('Sale', saleSchema);
