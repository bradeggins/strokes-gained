

function isValidTypeDist(intype, indist){
    return intype == "T" && (indist < 91 || indist > 549) ?  false
    : (intype == "F" || intype == "R" || intype == "S") && (indist < 5 || indist > 549) ? false
    : intype == "RC" && (indist < 9 || indist > 549) ? false
    : intype == "G" && (indist < 0.3 || indist > 27.5) ? false
    : true
}


module.exports = {
    isValidTypeDist
}