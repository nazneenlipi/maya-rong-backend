// import { Schema, model } from 'mongoose';

// const investmentSchema = new Schema({
//   name: { type: String, required: true },
//   business: { type: Schema.Types.ObjectId, ref: 'Business', required: true },
//   description: String,
//   date: Date,
//   amount: { type: Number, required: true },
//   category: { type: String, enum: ['Savings', 'Equity', 'Debt'], required: true },
// });

// export default model('Investment', investmentSchema);

import { Schema, model } from "mongoose";

const investmentSchema = new Schema({
  investorName: { type: String, required: true },

  business: {
    type: Schema.Types.ObjectId,
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

export default model("Investment", investmentSchema);
