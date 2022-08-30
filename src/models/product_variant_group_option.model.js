const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("product_variant_group_option", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    variant_group_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    variant_id : {
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