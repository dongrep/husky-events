const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  organizer: String,
  startTime: String,
  endTime: String,
  duration: Number,
  location: String,
  image: String,
  tags: [String],
});

module.exports = mongoose.model("events", eventSchema);
