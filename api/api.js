import express from 'express';
import itemRoutes from './routes/itemRoutes.js';
import userRoutes from './routes/userRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import authRoutes from './routes/authRoutes.js';
import morgan from 'morgan';

const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

//api.use ->  registrar middlewares

//TODO: registrar rutas del sistema

api.use(authRoutes);

api.use(itemRoutes);
// api.use(userRoutes);
api.use(ticketRoutes);

// const errorLogger = (error, request, response, next) => {
//   console.log(`error ${error.message}`);
//   next(error);
// };

// const errorResponder = (error, request, response, next) => {
//   response.header('Content-Type', 'application/json');
//   console.log('cosa rara');
//   const status = error.status || 400;
//   response.status(status).send(error.message);
// };

// const invalidPathHandler = (request, response, next) => {
//   response.status(404);
//   response.send('invalid path');
// };
// api.use(errorLogger);

// api.use(errorResponder);

// api.use(invalidPathHandler);
export default api;
