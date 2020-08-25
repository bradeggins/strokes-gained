const db = require('../db/db')
const {addStrokesGained} = require('../lib/lib')
const{ isValidTypeDist } = require('../lib/validate.js')


exports.selectRoundData = (req,res) => {
    return db.viewRounds()
        .then((data) => {
            res.render('dashboard', buildDisplayData(data))
        }).catch((err) => {
            sendServerErr(err, res)
        });
}

exports.newRound = (req, res) => {
    res.render('newround')
}

exports.addRound = (req, res) => {
    const { round_date, course } = req.body
    return db.addRound(round_date, course)
        .then((data) => {
            res.json(data)  
            // res.render('addshot', buildDisplayData(course, data[0]))
        }).catch((err) => {
            sendServerErr(err, res)
        });
}

exports.enterShot = (req, res) => {
    const roundId = req.params.id
    const { shot_from, dist_to_hole, holed} = req.body
    if (isValidTypeDist(shot_from, dist_to_hole)){
        return db.createShotData(shot_from, dist_to_hole, holed, roundId)
        .then(() => {
            res.json({roundId, added: true})
                    // res.render('addshot', { id:roundId, added: 'Shot Added' })
        }).catch((err) => {
            sendServerErr(err, res)
        });
    } else {
        res.send('Invalid Distance')
    }
}

exports.displayRound = (req,res) => {
        const { roundId } = req.body
       return db.getRoundShots(roundId)
        .then((shots) => {
            addStrokesGained(shots)
            res.json(shots)
            // res.render('rounddata', buildDisplayData(shots))
        }).catch((err) => {
            sendServerErr(err,res)
        });
}

exports.editShot = (req,res) => {
    insertshot

}

exports.deleteShot = (req,res) => {
    const {roundId} = req.body
    return db.deleteShot(roundId)
        .then((result) => {
            res.json({shot: 3, deleted: true})
        }).catch((err) => {
            sendServerErr(err,res)
        });
}











function buildDisplayData(data, id){
    return {
       id,
       data
    }
}

function sendServerErr(err, res){
    res.status(500).send('Oops ' + err.message)
}