const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.post('/', authMiddleware, getProducts);
router.post('/', authMiddleware, createProduct);

module.exports = router;