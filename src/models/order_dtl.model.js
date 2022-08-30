const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("order_dtl", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    order_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    variant_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    brand_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_unit_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    piece : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currency_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price : {
      type: DataTypes.DOUBLE(8, 2), 
      allowNull: false
    },
    currency_rate : {
      type: DataTypes.DOUBLE(8, 2), 
      allowNull: false
    },
    cargo_price : {
      type: DataTypes.DOUBLE(8, 2), 
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