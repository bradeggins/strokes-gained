function isValidTypeDist(intype, indist){
    if(invalidFwyRoughSand(intype, indist)) return false
    else if(invalidTee(intype, indist)) return false
    else if(invalidGreen(intype, indist)) return false
    else if(isNotNull(indist, intype)) return false
    else return true
}

function invalidFwyRoughSand(intype, indist){
    if((intype == "F" || intype == "R" || intype == "S") && (indist < 5 || indist > 549)) return true
}

function invalidTee(intype, indist){
    if(intype == "T" && (indist < 91 || indist > 549)) return true
}

function invalidGreen(intype, indist){
    if (intype == "G" && (indist < 0.3 || indist > 27.5)) return true
}

function isNotNull(indist, intype){
    if((intype == "" || intype == null) || (indist == "" || indist == null)) return true
}


module.exports = {
    isValidTypeDist
}