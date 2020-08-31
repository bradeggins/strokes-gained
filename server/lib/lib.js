function calcStrokesGained(hole, nexthole){
    return hole.holed == 1 ? +(hole.strokes_to_hole - 1).toFixed(2)
    : nexthole != null ? +(hole.strokes_to_hole - nexthole.strokes_to_hole - 1).toFixed(2)
    : +(hole.strokes_to_hole - 1).toFixed(2)
 }

function addStrokesGained(shots){
    return shots.map((shot, i, shots) => {
        if(i < shots.length - 1){
            shot.sg = calcStrokesGained(shot, shots[i + 1])
        } else {
            shot.sg = calcStrokesGained(shot)
        }
    })

}

function strokesGainedPutting(shots, sgp_dist){
    let distances = [[0,1.5], [1.6,3], [3.1,4.5], [4.6, 6], [6.1, 9], [9.1,15], [15.1,27]]
    return shots.filter(shot => shot.shot_from == "G" 
    && shot.dist_to_hole >= distances[parseFloat(sgp_dist)][0] 
    && shot.dist_to_hole <= distances[parseFloat(sgp_dist)][1])
}

function strokesGainedOffTheTee(shots){
    return shots.filter(shot => shot.shot_from == "T" && shot.dist_to_hole > 200)
}

function strokesGainedTeeToGreen(shots){
    return shots.filter(shot => shot.shot_from != "G" || shot.shot_from == "T" && shot.dist_to_hole > 200)
}

function strokesGainedAroundTheGreen(shots){
    return shots.filter(shot => shot.shot_from != "G" && shot.dist_to_hole < 30)
}

function sumSG(shots){
    return shots.reduce((acc, value) => {
        return acc += value.sg
    }, 0)
}

function strokesGainedApproach(shots, sga_dist){
    let endRange = parseInt(sga_dist) + 25
    return shots.filter(shot => shot.dist_to_hole > sga_dist 
        && shot.dist_to_hole < endRange 
        && shot.shot_from != "G"
        || (shot.shot_from == "T" && shot.dist_to_hole < 200
        && shot.dist_to_hole > sga_dist
        && shot.dist_to_hole < endRange))
}



function chooseFilter(shots, obj){
    const {stat_type, round_group, sga_dist, sgp_dist} = obj
    let shotHistory = roundHistory(shots, round_group)
    switch (stat_type) {
        case "sgp": 
            let sgp = strokesGainedPutting(shotHistory, sgp_dist)
            return sumSG(sgp);
        case "sgt2g":
            let sgt2g = strokesGainedTeeToGreen(shotHistorys)
            return sumSG(sgt2g);
        case "sgott":
            let sgt = strokesGainedOffTheTee(shotHistorys)
            return sumSG(sgt);
        case "sgatg":
            let sgatg = strokesGainedAroundTheGreen(shotHistorys)
            return sumSG(sgatg)
        case "sga":
            let sga = strokesGainedApproach(shotHistorys, sga_dist)
            return sumSG(sga)
        default: return sumSG(shotHistorys)
    }
}

function roundHistory(shots, history){
    if(history == "all") {
        return shots  
    } else {
        let lastRound = shots[shots.length - 1].round_id;
        return shots.filter(shot => shot.round_id > lastRound - Number(history))
    }       
}


function validateBool(holed){
    return holed == "true" ? holed = 1: holed = ""
}


 module.exports = {
     calcStrokesGained,
     validateBool,
     addStrokesGained,
     chooseFilter,
     strokesGainedPutting,
     strokesGainedOffTheTee,
     strokesGainedTeeToGreen,
     strokesGainedAroundTheGreen,
     sumSG,
     strokesGainedApproach
 }