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
    return db('shots')
        .insert({shot_from, dist_to_hole, holed})
        .then((result) => {
          return db('holes')
            .insert({round_id: roundId, shot_id: result[0]})  
        })
}

module.exports = {
    addRound,
    enterShot,
    getRoundShots
}