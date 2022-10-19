import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB_URI, () => {
  console.log('Conexión a base datos satisfactoria 💚');
});
