const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("product_variant_group", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    product_id : {
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
    deleted_at : {
      type: DataTypes.DATE,
      allowNull: true
    },
});