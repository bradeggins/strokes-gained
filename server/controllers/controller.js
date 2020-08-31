const db = require('../db/db')
const { addStrokesGained, chooseFilter } = require('../lib/lib')
const{ isValidTypeDist } = require('../lib/validate.js')


exports.selectRoundData = (req,res) => {
    return db.viewRounds()
        .then((data) => {
            res.json({rounds: data})
        }).catch((err) => {
            sendServerErr(err, res)
        });
}

exports.addRound = (req, res) => {
    return db.addRound(req.body)
        .then((data) => {
            res.json({round_id: data[0], added: true})  
        }).catch((err) => {
            sendServerErr(err, res)
        });
}

exports.enterShot = (req, res) => {
    if (isValidTypeDist(req.body)){
        return db.createShotData(req.body, db.insertShot)
        .then((data) => {
            res.json({round_id: data, added: true})
        }).catch((err) => {
            sendServerErr(err, res)
        });
    } else {
        res.json({err: 'Invalid Distance'})
    }
}

exports.displayRound = (req,res) => {
        return db.getRoundShots(req.body)
            .then((shots) => {
                addStrokesGained(shots)
                res.json(shots)
            }).catch((err) => {
                sendServerErr(err,res)
            });
}

exports.updateShot = (req,res) => {
            if(isValidTypeDist(req.body)){
            return db.updateShot(req.body)
                .then((result) => {
                    res.json({result, updated: true})
                }).catch((err) => {
                    sendServerErr(err,res)
                });
        } else {
            res.json({err: 'Invalid Distance'})
        }
    
}

exports.deleteShot = (req,res) => {
    const {shot_id} = req.body
    return db.deleteShot(shot_id)
        .then((result) => {
            res.json({shot: 3, deleted: true})
        }).catch((err) => {
            sendServerErr(err,res)
        });
}

exports.analyseShots = (req,res) => {  
    return db.analyseShots()
        .then((shots) => {
            addStrokesGained(shots)
            let sum = chooseFilter(shots, req.body).toFixed(2)
            res.json({sg: sum})
        }).catch((err) => {
            sendServerErr(err, res)
        });
}


function sendServerErr(err, res){
    res.status(500).send('Oops ' + err.message)
}