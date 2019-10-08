const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  price: Number,
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);