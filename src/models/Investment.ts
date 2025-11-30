import { Schema, model } from 'mongoose';

const investmentSchema = new Schema({
  name: { type: String, required: true },
  business: { type: Schema.Types.ObjectId, ref: 'Business', required: true },
  description: String,
  date: Date,
  amount: { type: Number, required: true },
  category: { type: String, enum: ['Savings', 'Equity', 'Debt'], required: true },
});

export default model('Investment', investmentSchema);
