const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config()

const banksModel = require("../src/models/banks.model");
const brandsModel = require("../src/models/brands.model");
const cargoModel = require("../src/models/cargo.model");
const categoriesModel = require("../src/models/categories.model");
const currencyModel = require("../src/models/currency.model");
const discount_typesModel = require("../src/models/discount_types.model");
const failed_jobsModel = require("../src/models/failed_jobs.model");
const imgModel = require("../src/models/img.model");
const membersModel = require("../src/models/members.model");
const member_addressesModel = require("../src/models/member_addresses.model");
const member_price_alarmModel = require("../src/models/member_price_alarm.model");
const member_stock_alarmModel = require("../src/models/member_stock_alarm.model");
const newsletterModel = require("../src/models/newsletter.model");
const ordersModel = require("../src/models/orders.model");
const orders_cargoModel = require("../src/models/orders_cargo.model");
const orders_installmentModel = require("../src/models/orders_installment.model");
const order_dtlModel = require("../src/models/order_dtl.model");
const order_dtl_discountModel = require("../src/models/order_dtl_discount.model");
const panel_usersModel = require("../src/models/panel_users.model");
const panel_user_typesModel = require("../src/models/panel_user_types.model");
const password_resetsModel = require("../src/models/password_resets.model");
const productsModel = require("../src/models/products.model");
const product_commentsModel = require("../src/models/product_comments.model");
const product_discountModel = require("../src/models/product_discount.model");
const product_dtlModel = require("../src/models/product_dtl.model");
const product_unitsModel = require("../src/models/product_units.model");
const product_variantsModel = require("../src/models/product_variants.model");
const product_variant_groupModel = require("../src/models/product_variant_group.model");
const product_variant_group_optionModel = require("../src/models/product_variant_group_option.model");
const status_listModel = require("../src/models/status_list.model");
const status_list_typesModel = require("../src/models/status_list_types.model");
const storesModel = require("../src/models/stores.model");
const usersModel = require("../src/models/users.model");
 
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect:process.env.DB_DIALECT, 
      logging: console.log,
      define: {
        id:false,
        freezeTableName: true,
        hasTrigger : false,
        force: false,
        alter: false,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
      }
      /*dialectOptions: {
          ssl: {
              require: true,
              rejectUnauthorized: false,
          },
      },*/
});
(async () => await sequelize.sync({ alter: false, force : false, freezeTableName: true,}))();

const Banks = banksModel(sequelize, DataTypes);
const Brands = brandsModel(sequelize, DataTypes);
const Cargo = cargoModel(sequelize, DataTypes);
const Categories = categoriesModel(sequelize, DataTypes);
const Currency = currencyModel(sequelize, DataTypes);
const Discount_types = discount_typesModel(sequelize, DataTypes);
const Failed_jobs = failed_jobsModel(sequelize, DataTypes);
const Img = imgModel(sequelize, DataTypes);
const Members = membersModel(sequelize, DataTypes);
const Member_addresses = member_addressesModel(sequelize, DataTypes);
const Member_price_alarm = member_price_alarmModel(sequelize, DataTypes);
const Member_stock_alarm = member_stock_alarmModel(sequelize, DataTypes);
const Newsletter = newsletterModel(sequelize, DataTypes);
const Orders = ordersModel(sequelize, DataTypes);
const Orders_cargo = orders_cargoModel(sequelize, DataTypes);
const Orders_installment = orders_installmentModel(sequelize, DataTypes);
const Order_dtl = order_dtlModel(sequelize, DataTypes);
const Order_dtl_discount = order_dtl_discountModel(sequelize, DataTypes);
const Panel_users = panel_usersModel(sequelize, DataTypes);
const Panel_user_types = panel_user_typesModel(sequelize, DataTypes);
const Password_resets = password_resetsModel(sequelize, DataTypes);
const Products = productsModel(sequelize, DataTypes);
const Product_comments = product_commentsModel(sequelize, DataTypes);
const Product_discount = product_discountModel(sequelize, DataTypes);
const Product_dtl = product_dtlModel(sequelize, DataTypes);
const Product_units = product_unitsModel(sequelize, DataTypes);
const Product_variants = product_variantsModel(sequelize, DataTypes);
const Product_variant_group = product_variant_groupModel(sequelize, DataTypes);
const Product_variant_group_option = product_variant_group_optionModel(sequelize, DataTypes);
const Status_list = status_listModel(sequelize, DataTypes);
const Status_list_types = status_list_typesModel(sequelize, DataTypes);
const Stores = storesModel(sequelize, DataTypes);
const Users = usersModel(sequelize, DataTypes);

Products.hasOne(Product_units, { 
  foreignKey: 'id',
  sourceKey: "product_unit_id",
});

Products.hasOne(Categories, { 
  foreignKey: 'id',
  sourceKey: "category_id",
});

Products.hasOne(Brands, { 
  foreignKey: 'id',
  sourceKey: "brand_id",
});
Products.hasOne(Categories, { 
  foreignKey: 'id',
  sourceKey: "category_id",
});

Products.hasOne(Status_list, { 
  foreignKey: 'id',
  sourceKey: "status_id",
});

Products.hasMany(Product_dtl, { 
  foreignKey: 'product_id', 
});

Product_dtl.hasMany(Product_discount, { 
  foreignKey: 'product_dtl_id', 
});

Product_dtl.hasOne(Currency, { 
  foreignKey: 'id',
  sourceKey: "currency_id",
});

Product_dtl.hasOne(Product_variant_group, { 
  foreignKey: 'id',
  sourceKey: "variant_group_id",
});

Product_variant_group.hasMany(Product_variant_group_option, { 
  foreignKey: 'variant_group_id'
});

Product_variant_group_option.hasOne(Product_variants, { 
  foreignKey: 'id',
  sourceKey: "variant_id",
});

module.exports = {
  Banks, 
  Brands,
  Cargo,
  Categories,
  Currency,
  Discount_types,
  Failed_jobs,
  Img,
  Members,
  Member_addresses,
  Member_price_alarm,
  Member_stock_alarm,
  Newsletter,
  Orders,
  Orders_cargo,
  Orders_installment,
  Order_dtl,
  Order_dtl_discount,
  Panel_users,
  Panel_user_types,
  Password_resets,
  Products,
  Product_comments,
  Product_discount,
  Product_dtl,
  Product_units,
  Product_variants,
  Product_variant_group,
  Product_variant_group_option,
  Status_list,
  Status_list_types,
  Stores,
  Users,
};
 