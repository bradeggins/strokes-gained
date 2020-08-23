const knex = require('knex')
const config = require('../knexfile').development

const database = knex(config)

function addRound(round_date, course, db = database){
    return db('rounds')
        .insert({ round_date, course})
        .select('id')    
}

function getRoundShots(roundId, db = database){
    return db('shots')
        .join('holes', 'shot_id', 'id')
        .where({round_id: roundId})
}

function enterShot(shot_from, dist_to_hole, holed, roundId, db = database){
    return countHoles(roundId)
       .then((hole) => {     
            let boolHoled = validateBool(holed)
            return db('shots')
            .insert({shot_from, dist_to_hole, holed: boolHoled, hole_number: hole })
            .then((result) => {
              return db('holes')
                .insert({round_id: roundId, shot_id: result[0]})  
            })
        })
}

function countHoles(roundId, db = database){
    return getRoundShots(roundId)
        .then((shots) => {
            const countShots = shots.filter(shot => shot.holed == 1)
            return countShots.length + 1
        })
}

function validateBool(holed){
    return holed == "true" ? holed = 1: holed = ""
}

module.exports = {
    addRound,
    enterShot,
    getRoundShots,
    countHoles
}