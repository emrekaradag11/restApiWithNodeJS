const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("members", {
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
    phone : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_id : {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
    gender : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sms_notification : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mail_notification : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_of_birth : {
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