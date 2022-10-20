import mongoose from 'mongoose';

/**
 * 1.- Schema (molde) ✅
 * 2.- Nombre (String)
 */

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  birthday: Date,
  address: String,
  role: String,
  phone: String,
  contacts: [String],
  email: String,
  password: String,
});

export default mongoose.model('User', userSchema);
