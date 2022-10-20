import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './api/models/User.js';

dotenv.config();

mongoose.connect(process.env.DB_URI, async () => {
  console.log('Conexión a base datos satisfactoria 💚');

  /**
   * CRUD Básico con mongoose
   */

  const user = await User.create({
    address: 'Dirección prueba',
    birthday: new Date(),
    contacts: ['Pedrito', 'Jorge'],
    email: 'corre@prueba.com',
    lastname: 'Rodriguez',
    name: 'Juan',
    password: '123',
    phone: '17232163',
    role: 'Client',
  });

  console.log(user);

  // User.find({
  //   name: 'Juan',
  // });

  // User.updateMany(
  //   {
  //     name: 'Juan',
  //     lastname: 'Rodriguez',
  //   },
  //   {
  //     role: 'Admin',
  //   }
  // );

  // User.deleteOne({
  //   name: 'Juan',
  // });
});
