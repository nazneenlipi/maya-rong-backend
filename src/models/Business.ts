import { Schema, model } from 'mongoose';

const businessSchema = new Schema({
  name: { type: String, required: true },
});

export default model('Business', businessSchema);
