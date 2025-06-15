const express = require("express");
const router = express.Router();
const { Booking } = require("../models");
const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken, async (req, res) => {
  const bookings = await Booking.findAll();
  res.json(bookings);
});

router.post("/", verifyToken, async (req, res) => {
  const { name, email, room_type, checkin, checkout } = req.body;
  const booking = await Booking.create({ name, email, room_type, checkin, checkout });
  res.json(booking);
});

router.put("/:id", verifyToken, async (req, res) => {
  const { name, email, room_type, checkin, checkout } = req.body;
  const booking = await Booking.findByPk(req.params.id);
  if (!booking) return res.status(404).json({ message: "Not found" });
  await booking.update({ name, email, room_type, checkin, checkout });
  res.json(booking);
});

router.delete("/:id", verifyToken, async (req, res) => {
  const booking = await Booking.findByPk(req.params.id);
  if (!booking) return res.status(404).json({ message: "Not found" });
  await booking.destroy();
  res.json({ message: "Booking deleted" });
});

module.exports = router;
