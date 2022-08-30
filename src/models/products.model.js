const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("products", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    text : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keywords : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tags : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brand_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_unit_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id : {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
    variant_status_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ord : {
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
    deleted_at : {
      type: DataTypes.DATE,
      allowNull: true
    },
});