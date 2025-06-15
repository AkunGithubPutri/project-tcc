module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Room", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.FLOAT,  
    
  }, {

    timestamps: false 
  });

};
