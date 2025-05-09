import Booking from '../models/Booking.js';

  
  export const bookActivity = async (req, res) => {
    const { activityId } = req.body;
    try {
      const booking = await Booking.create({ user: req.user.id, activity: activityId });
      res.status(201).json({ message: 'Activity booked successfully', booking });
    } catch (error) {
      res.status(500).json({ message: 'Failed to book activity' });
    }
  };
  
  export const getMyBookings = async (req, res) => {
    try {
      const bookings = await Booking.find({ user: req.user.id }).populate('activity');
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve bookings', error});
    }
  };

// export const cancelBooking = async (req, res) => {
  
//   try {
//     const booking_id = await Booking.find({ user: req.user.id });
//     const booking = await Booking.findByIdAndDelete(booking_id);
//     if (!booking) return res.status(404).json({ message: 'Booking not found' });
//     res.status(200).json({ message: 'Booking cancelled successfully' });
//   }
//   catch (error) {
//     res.status(500).json({ message: 'Failed to cancel booking' });
//   };
// };