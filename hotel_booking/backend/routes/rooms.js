const express = require("express");
const router = express.Router();
const { Room } = require("../models");
const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken, async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Failed to get rooms", error: err });
  }
});

module.exports = router;
