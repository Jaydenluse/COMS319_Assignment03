import mongoose from 'mongoose';
import db from './mongodb.js';

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
  }
});

const Product = db.model('Product', productSchema);

export default Product;