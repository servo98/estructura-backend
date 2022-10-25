import express from 'express';
import itemRoutes from './routes/itemRoutes.js';

const api = express();

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

//TODO: registrar rutas del sistema

api.use(itemRoutes);

export default api;
