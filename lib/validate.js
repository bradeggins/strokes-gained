function isValidTypeDist(intype, indist){
    if(inValidFwyRoughSand(intype, indist)) return false
    else if(inValidTee(intype, indist)) return false
    else if(inValidGreen(intype, indist)) return false
    else if(isNotNull(indist, intype)) return false
    else return true
}

function inValidFwyRoughSand(intype, indist){
    if((intype == "F" || intype == "R" || intype == "S") && (indist < 5 || indist > 549)) return true
}

function inValidTee(intype, indist){
    if(intype == "T" && (indist < 91 || indist > 549)) return true
}

function inValidGreen(intype, indist){
    if (intype == "G" && (indist < 0.3 || indist > 27.5)) return true
}

function isNotNull(indist, intype){
    if((intype == "" || intype == null) || (indist == "" || indist == null)) return true
}

// function isValidTypeDist(intype, indist){
//     return intype == "T" && (indist < 91 || indist > 549) ?  false
//     : (intype == "F" || intype == "R" || intype == "S") && (indist < 5 || indist > 549) ? false
//     : intype == "RC" && (indist < 9 || indist > 549) ? false
//     : intype == "G" && (indist < 0.3 || indist > 27.5) ? false
//     : (intype == "" || intype == null) || (indist == "" || intype == null) ? false
//     : true


module.exports = {
    isValidTypeDist
}