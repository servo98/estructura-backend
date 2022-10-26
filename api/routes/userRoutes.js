import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.route('/users').get(userController.read).post(userController.create);
router
  .route('/users/:id')
  .get(userController.readById)
  .put(userController.update)
  .delete(userController.remove);

export default router;
