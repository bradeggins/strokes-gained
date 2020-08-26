function isValidTypeDist(shotObj){
    const {shot_from, dist_to_hole} = shotObj
    if(invalidFwyRoughSand(shot_from, dist_to_hole)) return false
    else if(invalidTee(shot_from, dist_to_hole)) return false
    else if(invalidGreen(shot_from, dist_to_hole)) return false
    else if(isNotNull(dist_to_hole, shot_from)) return false
    else return true
}

function invalidFwyRoughSand(shot_from, dist_to_hole){
    if((shot_from == "F" || shot_from == "R" || shot_from == "S") && (dist_to_hole < 5 || dist_to_hole > 549)) return true
}

function invalidTee(shot_from, dist_to_hole){
    if(shot_from == "T" && (dist_to_hole < 91 || dist_to_hole > 549)) return true
}

function invalidGreen(shot_from, dist_to_hole){
    if (shot_from == "G" && (dist_to_hole < 0.3 || dist_to_hole > 27.5)) return true
}

function isNotNull(dist_to_hole, shot_from){
    if((shot_from == "" || shot_from == null) || (dist_to_hole == "" || dist_to_hole == null)) return true
}


module.exports = {
    isValidTypeDist,
    invalidFwyRoughSand,
    invalidGreen,
    invalidTee,
    isNotNull
}