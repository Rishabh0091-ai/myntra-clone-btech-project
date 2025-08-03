const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

// This route handles GET requests to '/api/products'
router.get('/', getProducts);

module.exports = router;