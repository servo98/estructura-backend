import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './api/models/User.js';
import Book from './api/models/Book.js';

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

  //TODO: Ejercicio1

  /**
   * 1.- Crear modelo book
   * 2.- create de modelo book
   * 3.- find de Book
   * 4.- Update Book by id
   * 5.- Delete by id
   */

  const book = await Book.create({
    edition: 1,
    editorial: 'Los panchos',
    isbn: '1jd8un12db812dg7',
    pageNumber: 200,
    title: 'Mongo for dummies',
  });

  console.log(book);

  const books = await Book.find();
  console.log(books);

  const updated = await Book.findByIdAndUpdate('6350b2d4acdc19ec94ff0f6d', {
    title: 'Título cambiado',
  });

  console.log(updated);
});
