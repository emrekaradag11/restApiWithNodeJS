const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("users", {
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
    password : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    two_factor_secret : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    two_factor_recovery_codes : {
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
      allowNull: true
    },
    email_verified_at : {
      type: DataTypes.DATE,
      allowNull: true
    },
    remember_token : {
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
    deleted_at : {
      type: DataTypes.DATE,
      allowNull: true
    },
});