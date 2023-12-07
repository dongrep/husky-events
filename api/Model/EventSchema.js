const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  organizer: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  location: { type: String, required: true },
  locationUrl: String,
  image: { type: String, required: true },
  tags: { type: [String] },
  attendees: [String],
});

module.exports = mongoose.model("events", eventSchema);
