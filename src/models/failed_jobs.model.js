const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("failed_jobs", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    uuid : {
      type: DataTypes.STRING,
      allowNull: false
    },
    connection : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    queue : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payload : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exception : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    failed_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }, 
});