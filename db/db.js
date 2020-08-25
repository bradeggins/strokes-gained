const knex = require('knex')
const config = require('../knexfile').development
const { validateBool } = require('../lib/lib')

const database = knex(config)

function addRound(round_date, course, db = database){
    return db('rounds')
        .insert({ round_date, course})
        .select('id')    
}

function viewRounds(db=database){
    return db('rounds')
        .select()
}

function getRoundShots(roundId, db = database){
    return db('shots')
        .join('holes', 'shot_id', 'id')
        .where({round_id: roundId})
}

function createShotData(shot_from, dist_to_hole, holed, roundId, db = database){
    return countHoles(roundId)
       .then((hole) => {     
            return getAvgStrokesToHole(shot_from, dist_to_hole)
                .then((avgStrokes) => {
                    const {strokesToHole} = avgStrokes
                    const boolHoled = validateBool(holed)
                   return insertShot(shot_from, dist_to_hole, boolHoled, hole, strokesToHole, roundId, db)                    
                })
        })
}

function insertShot(shot_from, dist_to_hole, holed, hole_number, strokes_to_hole, round_id, db = database){
    return db('shots')
        .insert({shot_from, dist_to_hole, holed, hole_number, strokes_to_hole})
        .then((result) => {
        return db('holes')
            .insert({round_id, shot_id: result[0]})  
        })                    
}

function countHoles(roundId){
    return getRoundShots(roundId)
        .then((shots) => {
            const countShots = shots.filter(shot => shot.holed == 1)
            return countShots.length + 1
        })
}

function getAvgStrokesToHole(type, dist, db = database){
    return db('data')
        .where({ shotFrom: type, distToHole: dist})
        .select('strokesToHole')
        .first()
}

function deleteShot(shot_id, db = database){
    return db('holes')
        .del()
        .where({shot_id})
         .then((result) => {
             return db('shots')
                .del()
                .where({id: shot_id})
         })
}

function updateShot(shot_id, dist_to_hole, shot_from, holed, hole_number, strokes_to_hole, db = database){
    return db('shots')
        .update({dist_to_hole, shot_from, holed, hole_number, strokes_to_hole})
        .where({id:shot_id})
}

function getHoleNumber(shot_id, db = database){
    return db('shots')
        .select('hole_number')
        .where({id: shot_id})
        .first()
}


module.exports = {
    addRound,
    createShotData,
    getRoundShots,
    countHoles,
    getAvgStrokesToHole,
    viewRounds,
    deleteShot,
    updateShot,
    getHoleNumber
}