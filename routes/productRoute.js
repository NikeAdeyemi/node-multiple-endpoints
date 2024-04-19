const express = require('express')
const { allProducts, getSingleProduct, updateProduct, deleteProduct, createProduct } = require('../controllers/productController')

const router = express.Router()

router.post('/products', createProduct)

router.get('/products', allProducts)

router.get('/products/:id', getSingleProduct)

router.put('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct)











module.exports = router