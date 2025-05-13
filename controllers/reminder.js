const Reminder = require("../models/reminder");

const createReminder = async (req, res) => {
  const { date, time, message, reminder_type } = req.body;

  if (!date || !time || !message || !reminder_type) {
    return res.status(400).json({ error: "All field are required" });
  }

  try {
    const newReminder = new Reminder({ date, time, message, reminder_type });
    const saveReminder = await newReminder.save();
    res.status(201).json({ message: "success", data: saveReminder });
  } catch (error) {
    res.status(500).json({ error: "Failed to save reminder" });
  }
};

module.exports = { createReminder };
