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

router.route('/').get(ticketController.read).post(ticketController.create);

router
  .route('/:id')
  .get(ticketController.readById)
  .put(ticketController.update)
  .delete(ticketController.remove);

router.route('/:id/calculate').put(ticketController.calculateById);

export default router;
