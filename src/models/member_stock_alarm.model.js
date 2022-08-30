const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("member_stock_alarm", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    variant_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id : {
      type: DataTypes.INTEGER,
      defaultValue: 1,
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