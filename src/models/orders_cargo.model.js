const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("orders_cargo", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tracking_code : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    order_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cargo_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
    updated_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }, 
});