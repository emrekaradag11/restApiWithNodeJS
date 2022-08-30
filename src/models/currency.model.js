const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("currency", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title : {
      type: DataTypes.TEXT,
      allowNull: false
    }, 
    short_code : {
      type: DataTypes.TEXT, 
      allowNull: false
    }, 
    rate : {
      type: DataTypes.DOUBLE(8, 2), 
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