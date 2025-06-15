const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Definisikan dan kumpulkan semua model di sini
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")(sequelize, DataTypes);
db.Room = require("./room")(sequelize, DataTypes);
db.Booking = require("./booking")(sequelize, DataTypes);
db.Reservation = require("./reservation")(sequelize, DataTypes);


module.exports = db;
