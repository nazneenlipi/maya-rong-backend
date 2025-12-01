"use strict";
// import { Schema, model } from 'mongoose';
Object.defineProperty(exports, "__esModule", { value: true });
// const investmentSchema = new Schema({
//   name: { type: String, required: true },
//   business: { type: Schema.Types.ObjectId, ref: 'Business', required: true },
//   description: String,
//   date: Date,
//   amount: { type: Number, required: true },
//   category: { type: String, enum: ['Savings', 'Equity', 'Debt'], required: true },
// });
// export default model('Investment', investmentSchema);
const mongoose_1 = require("mongoose");
const investmentSchema = new mongoose_1.Schema({
    investorName: { type: String, required: true },
    business: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Business",
        required: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    description: { type: String, default: "" },
    date: { type: Date, default: Date.now },
    amount: { type: Number, required: true, min: 0 },
    category: {
        type: String,
        enum: ["Products", "Marketing"],
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("Investment", investmentSchema);
