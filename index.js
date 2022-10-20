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

  // console.log(user);

  const users = await User.find({
    name: 'Juan',
  });

  // console.log(users);

  const promiseResult = await User.updateMany(
    {
      name: 'Juan',
      lastname: 'Rodriguez',
    },
    {
      role: 'Admin',
    }
  );

  // console.log(promiseResult);

  const result = await User.deleteOne({
    name: 'Juan',
  });

  console.log(result);
});
