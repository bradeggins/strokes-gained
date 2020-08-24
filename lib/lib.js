function calcStrokesGained(hole, nexthole){
    return nexthole != null ? +(hole - nexthole - 1).toFixed(2): +(hole - 1).toFixed(2)
 }

 function validateBool(holed){
    return holed == "true" ? holed = 1: holed = ""
}

 module.exports = {
     calcStrokesGained,
     validateBool
 }