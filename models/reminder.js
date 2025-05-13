const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    requierd: true,
  },
  message: {
    type: String,
    required: true,
  },
  reminder_type: {
    type: String,
    enum: ["sms", "email"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Reminder", reminderSchema);
