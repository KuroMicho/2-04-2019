const express = require('express')
const router = express.Router()
//const Users = require('./users.route') 
const Products = require('./products.route')

router.use('/products', Products)

module.exports = router