const express = require('express')
const db = require('./db/db')
const{ isValidTypeDist } = require('./lib/validate.js')
const { calcStrokesGained, addStrokesGained } = require('./lib/lib.js')
const displayController = require('./controllers/displayController')

const router = express.Router()

router.get('/', displayController.selectRoundData)

router.get('/addround', (req,res) => {
    res.render('addround')
})

router.post('/addround', (req, res) => {
    const { round_date, course } = req.body
    return db.addRound(round_date, course)
    .then((result) => {
        const viewData = { round_id: result[0]}
        res.render('addshot', viewData)
    }).catch((err) => {
        res.status(500).send('Oops ' + err.message)
    });
})

router.post('/roundid/:id/entershot', (req, res) => {
    const roundId = req.params.id
    const { shot_from, dist_to_hole, holed} = req.body
    if (isValidTypeDist(shot_from, dist_to_hole)){
        return db.createShotData(shot_from, dist_to_hole, holed, roundId)
        .then(() => {
            return db.getRoundShots(roundId)
                .then((shots) => {
                    const data = {round_id: roundId, shots}
                    res.render('addshot', data)
                })
        }).catch((err) => {
            res.status(500).send('Oops ' + err.message)
        });
    } else {
        res.send('Invalid Distance')
    }
})

router.post('/displayround/', (req,res) => {
    const {roundId} = req.body
    db.getRoundShots(roundId)
    .then((shots) => {
        addStrokesGained(shots)
        const viewData = {allshots: shots}
        res.render('rounddata', viewData)
    }).catch((err) => {
        res.status(500).send('Oops ' + err.message)
    });
})

module.exports = router