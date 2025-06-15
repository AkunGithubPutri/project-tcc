const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const db = require("./models");
const sequelize = db.sequelize;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/rooms", require("./routes/rooms"));
app.use("/api/reservations", require("./routes/reservations"));
app.use("/api/booking", require("./routes/booking"));


// Start server
const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Database sync error:", err);
});