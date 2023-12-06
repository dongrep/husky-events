const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  eventId: String,
  userId: String,
  status: String,
  cost: Number,
},
{ timestamps: true }
);

module.exports = mongoose.model("Transaction", bookingSchema);
