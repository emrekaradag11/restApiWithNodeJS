const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("orders_installment", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bank_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    number_of_installments : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    installment_rate : {
      type: DataTypes.DOUBLE(8, 2), 
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