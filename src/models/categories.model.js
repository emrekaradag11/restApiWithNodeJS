const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("categories", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title : {
      type: DataTypes.TEXT,
      defaultValue: '',
      allowNull: true
    },
    parent_id : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_id : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_id : {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
    ord : {
      type: DataTypes.INTEGER,
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