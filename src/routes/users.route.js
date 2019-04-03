const express = require('express')
const router = express.Router()
const db = require('../db.js')

router.get('/', async (req, res) => {
    // select * from users
    const response = await db.select().from('products')

    res.json(response)

    console.log('response')
})

module.exports = router