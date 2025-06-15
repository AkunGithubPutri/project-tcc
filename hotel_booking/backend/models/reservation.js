module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define("Reservation", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Reservation;
};
