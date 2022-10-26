import express from 'express';
import itemRoutes from './routes/itemRoutes.js';
import userRoutes from './routes/userRoutes.js';

const api = express();

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

//TODO: registrar rutas del sistema

api.use(itemRoutes);
api.use(userRoutes);

export default api;
