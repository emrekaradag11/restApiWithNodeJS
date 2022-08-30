const express = require('express'); 
const router = express.Router()

const productsController = require('../controllers/products.controller')
const brandsController = require('../controllers/brands.controller')
const categoriesController = require('../controllers/categories.controller')
const currencyController = require('../controllers/currency.controller')

//menus
router.get('/products/', productsController.getProducts);
router.get('/brands/', brandsController.getBrands);
router.get('/categories/', categoriesController.getCategories);
router.get('/currencies/', currencyController.getCurrencies);

module.exports = router;