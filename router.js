const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    res.send("Hello World")
})

router.get('/addround', (req,res) => {
    res.render('addround')
})
module.exports = router