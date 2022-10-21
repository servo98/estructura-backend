import mongoose from 'mongoose';

/**
 * schema
 * nombre
 */

const bookSchema = new mongoose.Schema({
  title: String,
  editorial: String,
  edition: Number,
  pageNumber: Number,
  isbn: String,
});

export default mongoose.model('Book', bookSchema);
