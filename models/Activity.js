
import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    required: true
  }
}, { timestamps: true });

const Activity = mongoose.model('Activity', activitySchema);
export default Activity;