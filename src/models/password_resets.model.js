const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("password_resets", {
    email : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    token : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
});