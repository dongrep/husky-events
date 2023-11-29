const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    owner: String,
    scheduleTime: String,
    duration: Number,
    location: String,
    image: String,
    tags: [String],
  });

module.exports = mongoose.model("events", eventSchema);