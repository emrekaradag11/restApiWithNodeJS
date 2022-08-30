const { Sequelize,DataTypes } = require('sequelize');
/* 

product_id
variant_id
member_id
status_id
comment_type
star
comment_title
comment_body
name
surname

*/
module.exports = (sequelize) =>
  sequelize.define("product_comments", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    variant_id : {
      type: DataTypes.INTEGER,
      allowNull: false
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
    comment_type : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    star : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment_title : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comment_body : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    surname : {
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
    deleted_at : {
      type: DataTypes.DATE,
      allowNull: true
    },
});