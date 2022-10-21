import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
  mongoose.connect(process.env.DB_URI, () => {
    console.log('Se ha conectado a la base de datos');
  });
};

export default connect;
