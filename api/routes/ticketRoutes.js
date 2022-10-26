import express from 'express';
import * as ticketController from '../controllers/ticketController.js';

const router = express.Router();

/**
 * /tickets GET
 * /tickets POST
 * /tickets/:id GET
 * /tickets/:id PUT
 * /tickets/:id DELETE
 */

router
  .route('/tickets')
  .get(ticketController.read)
  .post(ticketController.create);

router
  .route('/tickets/:id')
  .get(ticketController.readById)
  .put(ticketController.update)
  .delete(ticketController.remove);

export default router;
