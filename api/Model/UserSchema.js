const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    profileImg: { type: String },
    registeredEvents: { type: [String] },
    yourEvents: { type: [String] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
