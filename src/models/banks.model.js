const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("banks", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bank_name : {
      type: DataTypes.TEXT,
      defaultValue: '',
      allowNull: true
    },
    account_number : {
      type: DataTypes.TEXT,
      defaultValue: '',
      allowNull: true
    },
    account_holder : {
      type: DataTypes.TEXT,
      defaultValue: '',
      allowNull: true
    },
    iban_number : {
      type: DataTypes.TEXT,
      defaultValue: '',
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