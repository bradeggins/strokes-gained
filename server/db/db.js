const knex = require('knex')
const config = require('../../knexfile').development
const { validateBool } = require('../lib/lib')

const database = knex(config)

function addRound(shotObj, db = database){
    const { round_date, course } = shotObj
    return db('rounds')
        .insert({ round_date, course})
        .select('id')    
}

function viewRounds(db=database){
    return db('rounds')
        .select()
}

function getRoundShots(shotObj, db = database){
    const {round_id} = shotObj
    return db('shots')
        .join('holes', 'shot_id', 'id')
        .where({round_id})
}

function createShotData(shotObj, callback, db = database){
    const{ shot_from, dist_to_hole, holed } = shotObj
    return countHoles(shotObj)
       .then((hole) => {    
            return getAvgStrokesToHole(shot_from, dist_to_hole)
                .then((avgStrokes) => {
                    shotObj.hole_number = hole
                    shotObj.strokes_to_hole = avgStrokes.strokesToHole
                    shotObj.holed  = validateBool(holed)
                    return callback(shotObj, db)                    
                })
        })
}

function insertShot(shotObj, db = database){
    const{ shot_from, dist_to_hole, holed, hole_number, strokes_to_hole, round_id } = shotObj
    return db('shots')
        .insert({shot_from, dist_to_hole, holed, hole_number, strokes_to_hole})
        .then((result) => {
        return db('holes')
            .insert({round_id, shot_id: result[0]})  
        })                    
}

function countHoles(shotObj, db = database){
    return getRoundShots(shotObj)
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

function updateShot(shotObj, db = database){
    const{shot_id, dist_to_hole, shot_from, holed, hole_number } = shotObj
    return getAvgStrokesToHole(shot_from, dist_to_hole)
        .then((avgStrokes) => {
            const {strokesToHole} = avgStrokes
            return db('shots')
                .update({dist_to_hole, shot_from, holed, hole_number, strokes_to_hole: strokesToHole})
                .where({id: shot_id})
        })
    
}

function analyseShots(db = database){
    return db('shots')
        .join('holes', 'holes.shot_id', 'shots.id')
        .select()         
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
    insertShot,
    analyseShots
}