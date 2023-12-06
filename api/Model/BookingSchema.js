const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  event: String,
  userName: String,
  status: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
