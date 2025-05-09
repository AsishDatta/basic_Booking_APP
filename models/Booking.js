import mongoose from 'mongoose';


// Booking Schema for booking activities using activity ID given by the user
const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity',
    required: true
  },
  
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
