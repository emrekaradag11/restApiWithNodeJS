const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("order_dtl_discount", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    type_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_dtl_id : {
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
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
    updated_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }, 
});