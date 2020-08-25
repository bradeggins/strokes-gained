const db = require('../db/db')

exports.selectRoundData = (req,res) => {
    return db.viewRounds()
        .then((data) => {
            // const viewData = { rounds: data}
            res.render('dashboard', buildDisplayData(data))
        }).catch((err) => {
            sendServerErr(err)
        });
}


function buildDisplayData(data){
    return {
       data
    }
}

function sendServerErr(err){
    res.status(500).send('Oops ' + err.message)
}