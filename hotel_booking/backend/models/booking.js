module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkout: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Booking;
};
