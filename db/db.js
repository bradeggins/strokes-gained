const knex = require('knex')
const config = require('../knexfile').development

const database = knex(config)

function addRound(round_date, course, db = database){
    return db('rounds')
        .insert({ round_date, course})
        .select('id')    
}

// function enterShot(shot_from, dist_to_hole, holed){
//     return db('shots')
//         .insert({shot_from, dist_to_hole, holed})
//         .join()
// }

module.exports = {
    addRound

}