const knex = require('knex')
const config = require('../knexfile').development

const database = knex(config)

function addRound(round_date, course, db = database){
    return db('rounds')
        .insert({ round_date, course})
        .select('id')
}

module.exports = {
    addRound

}