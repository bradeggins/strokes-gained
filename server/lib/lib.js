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

function strokesGainedPutting(shots){
    return shots.filter(shot => shot.shot_from == "G")
}

function strokesGainedOffTheTee(shots){
    return shots.filter(shot => shot.shot_from == "T" && shot.dist_to_hole > 200)
}

function strokesGainedTeeToGreen(shots){
    return shots.filter(shot => shot.shot_from != "G" || (shot.shot_from == "T" && shot.dist_to_hole > 200))
}

function strokesGainedAroundTheGreen(shots){
    return shots.filter(shot => shot.shot_from != "G" && shot.dist_to_hole < 30)
}

function sumSG(shots){
    console.log(shots);
    return shots.reduce((acc, value) => {
        return acc += value.sg
    }, 0)
}

function strokesGainedApproach(shots, sga_dist){
    let startRange = parseInt(sga_dist)
    let endRange = startRange + 25
    return shots.filter(shot => shot.dist_to_hole > sga_dist 
        && shot.dist_to_hole < endRange 
        && shot.shot_from != "G"
        || (shot.shot_from = "T" && shot.shot_dist < 200))
}



function chooseFilter(shots, stat_type, sga_dist){
    switch (stat_type) {
        case "sgp": 
            let sgp = strokesGainedPutting(shots)
            return sumSG(sgp);
        case "sgt2g":
            let sgt2g = strokesGainedTeeToGreen(shots)
            return sumSG(sgt2g);
        case "sgott":
            let sgt = strokesGainedOffTheTee(shots)
            return sumSG(sgt);
        case "sgatg":
            let sgatg = strokesGainedAroundTheGreen(shots)
            return sumSG(sgatg)
        case "sga":
            let sga = strokesGainedApproach(shots, sga_dist)
            return sumSG(sga)
       
        default: return sumSG(shots)
    }
}



function validateBool(holed){
    return holed == "true" ? holed = 1: holed = ""
}




 module.exports = {
     calcStrokesGained,
     validateBool,
     addStrokesGained,
     chooseFilter
 }