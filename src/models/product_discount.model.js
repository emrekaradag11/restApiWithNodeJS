const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("product_discount", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    type_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_dtl_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate : {
      type: DataTypes.DOUBLE(8, 2), 
      allowNull: false
    },
    over_the_amount : {
      type: DataTypes.DOUBLE(8, 2), 
      allowNull: false
    },
    price : {
      type: DataTypes.DOUBLE(8, 2), 
      allowNull: false
    },
    start_date : {
      type: DataTypes.DATE,
      allowNull: true
    },
    finish_date : {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
    updated_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deleted_at : {
      type: DataTypes.DATE,
      allowNull: true
    },
});