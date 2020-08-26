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

 function validateBool(holed){
    return holed == "true" ? holed = 1: holed = ""
}



 module.exports = {
     calcStrokesGained,
     validateBool,
     addStrokesGained
 }