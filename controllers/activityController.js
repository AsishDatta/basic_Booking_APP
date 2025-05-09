import Activity from '../models/Activity.js';

// List all activities
export const listActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch activities' });
  }
};

// Create multiple activities
export const createActivities = async (req, res) => {
  const activities = req.body; // should be an array of activity objects
  try {
    if (!Array.isArray(activities)) {
      return res.status(400).json({ message: 'Input should be an array of activities' });
    }

    const newActivities = await Activity.insertMany(activities);
    res.status(201).json({ message: 'Activities created successfully', data: newActivities });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create activities', error });
  }
};

