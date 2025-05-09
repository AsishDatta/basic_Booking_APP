// activity routes

import express from 'express';
import { listActivities, createActivities} from '../controllers/activityController.js';

const router = express.Router();

// List all activities
router.get('/', listActivities);
router.post('/', createActivities);
// router.put('/:Activityid', updateActivity);
// router.delete('/:Activityid', deleteActivity);

export default router;