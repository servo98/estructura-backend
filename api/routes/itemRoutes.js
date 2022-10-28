import express from 'express';
import * as itemController from '../controllers/itemController.js';

const router = express.Router();

/**
 * TODAS las rutas que queramos de item
 *
 */

router.route('/').post(itemController.create).get(itemController.read);

router.route('/:id').get(itemController.readById).put(itemController.update);

export default router;
