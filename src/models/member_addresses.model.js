const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("member_addresses", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    member_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id : {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
    country_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    province_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    district_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    default : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tax_administration : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tax_number : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addres_title : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    company_name : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_code : {
      type: DataTypes.TEXT,
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