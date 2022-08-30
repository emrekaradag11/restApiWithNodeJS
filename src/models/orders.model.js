const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("orders", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    order_number : {
      type: DataTypes.TEXT,
      allowNull: false
    }, 
    order_desciption : {
      type: DataTypes.TEXT,
      allowNull: false
    }, 
    member_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_type_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_type_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_address_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id : {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
    currency_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    store_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_price : {
      type: DataTypes.DOUBLE(8, 2), 
      allowNull: false
    },
    net_total_price : {
      type: DataTypes.DOUBLE(8, 2), 
      allowNull: false
    },
    total_discount : {
      type: DataTypes.DOUBLE(8, 2), 
      allowNull: false
    },
    cargo_price : {
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