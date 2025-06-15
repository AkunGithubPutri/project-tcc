const express = require("express");
const router = express.Router();
const { Reservation } = require("../models");
const verifyToken = require("../middleware/verifyToken");

router.post("/", verifyToken, async (req, res) => {
  try {
    const reservation = await Reservation.create({
      customer_name: req.body.customer_name,
      room_id: req.body.room_id,
    });
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: "Failed to create reservation", error: err });
  }
});

module.exports = router;
