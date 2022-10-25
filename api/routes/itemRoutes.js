import express from 'express';
import * as itemController from '../controllers/itemController.js';

const router = express.Router();

/**
 * TODAS las rutas que queramos de item
 *
 */

router.route('/items').post(itemController.create);

export default router;
