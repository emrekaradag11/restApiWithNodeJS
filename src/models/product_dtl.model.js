const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("product_dtl", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_code : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    variant_code : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    variant_group_id : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kdv : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipping_day : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_id : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price : {
      type: DataTypes.DOUBLE(8, 2), 
      allowNull: true
    },
    stock : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipping_price : {
        type: DataTypes.DOUBLE(8, 2), 
        allowNull: true
    },
    old_prices : {
        type: DataTypes.TEXT, 
        allowNull: true
    },
    currency_id : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stock_status_id : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    barcode : {
        type: DataTypes.TEXT, 
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
});