import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
});

export default mongoose.model('Item', itemSchema);
