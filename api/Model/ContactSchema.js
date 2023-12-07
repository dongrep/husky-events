const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailId: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    userId: { type: String, required: true },
});

module.exports = mongoose.model("contact", contactSchema);
