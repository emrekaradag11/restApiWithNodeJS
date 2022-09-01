const express = require('express'); 
const router = express.Router()

const productsController = require('../controllers/products.controller')
const brandsController = require('../controllers/brands.controller')
const categoriesController = require('../controllers/categories.controller')
const currencyController = require('../controllers/currency.controller')
const memberController = require('../controllers/member.controller')

// products
router.get('/products/', productsController.getProducts);
router.get('/brands/', brandsController.getBrands);
router.get('/categories/', categoriesController.getCategories);
router.get('/currencies/', currencyController.getCurrencies);

// members - users
router.get('/members/', memberController.getMembers);


module.exports = router;