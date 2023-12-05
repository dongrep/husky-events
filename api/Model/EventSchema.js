const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    organizer: String,
    scheduleTime: String,
    duration: Number,
    location: String,
    image: String,
    tags: [String],
    attendees: [String],
  });

module.exports = mongoose.model("events", eventSchema);