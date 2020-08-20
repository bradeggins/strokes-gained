const express = require('express')
const db = require('./db/db')

const router = express.Router()

router.get('/', (req,res) => {
    res.send("Hello World")
})

router.get('/addround', (req,res) => {
    res.render('addround')
})

router.post('/addround', (req, res) => {
    const { round_date, course } = req.body
    return db.addRound(round_date, course)
    .then((result) => {
        console.log(result)
        res.render('addshot')
    }).catch((err) => {
        res.status(500).send('Oops' + err.message)
    });
   
})

router.post('/addround/entershot', (req, res) => {
    console.log(req.body)
})
module.exports = router