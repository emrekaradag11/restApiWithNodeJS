const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("img", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    img : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ord : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imageable_type : {
      type: DataTypes.TEXT,
      defaultValue: '',
      allowNull: false
    },
    imageable_id : {
      type: DataTypes.INTEGER.UNSIGNED,
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