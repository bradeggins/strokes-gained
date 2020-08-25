function calcStrokesGained(hole, nexthole){
    return nexthole != null ? +(hole - nexthole - 1).toFixed(2): +(hole - 1).toFixed(2)
 }

function addStrokesGained(shots){
    return shots.map((shot, i, shots) => {
        if(i < shots.length - 1){
            shot.sg = calcStrokesGained(shot.strokes_to_hole, shots[i + 1].strokes_to_hole)
        } else {
            shot.sg = calcStrokesGained(shot.strokes_to_hole)
        }
    })

}

 function validateBool(holed){
    return holed == "true" ? holed = 1: holed = ""
}



 module.exports = {
     calcStrokesGained,
     validateBool,
     addStrokesGained
 }