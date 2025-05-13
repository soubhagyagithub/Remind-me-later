const express = require("express");
const router = express.Router();
const { createReminder } = require("../controllers/reminder");

router.post("/", createReminder);

module.exports = router;
