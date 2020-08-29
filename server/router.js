const express = require('express')
const db = require('./db/db')
const controller = require('./controllers/controller')

const router = express.Router()

router.route('/selectround')
    .post( controller.selectRoundData)

router.route('/addround')
    .post(controller.addRound)

router.route('/round/entershot')
    .post(controller.enterShot)

router.route('/displayround')
    .post(controller.displayRound)
    
router.route('/round/updateshot')
    .post(controller.updateShot)

router.route('/round/deleteshot')
    .post(controller.deleteShot)


module.exports = router