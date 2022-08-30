const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("panel_users", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    surname : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email : {
      type: DataTypes.TEXT,
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
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
    updated_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }, 
});