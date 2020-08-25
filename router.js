const express = require('express')
const db = require('./db/db')
const displayController = require('./controllers/displayController')

const router = express.Router()

router.get('/', displayController.selectRoundData)

router.get('/newround', displayController.newRound)

router.route('/addround')
    .post(displayController.addRound)

router.route('/roundid/:id/entershot')
    .post(displayController.enterShot)

router.route('/displayround')
    .post(displayController.displayRound)

module.exports = router