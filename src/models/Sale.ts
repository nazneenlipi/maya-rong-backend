import { Schema, model } from 'mongoose';

const saleSchema = new Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  salePrice: { type: Number, required: true },
  costPrice: { type: Number, required: true },
  profit: { type: Number, required: true },
  date: { type: Date, required: true },
  business: { type: Schema.Types.ObjectId, ref: 'Business', required: true },
});

export default model('Sale', saleSchema);
