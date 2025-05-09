
import express from 'express';
import { bookActivity, getMyBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', bookActivity);
router.get('/', getMyBookings);

export default router;