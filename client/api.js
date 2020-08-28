

function postData (string, state, callback){
    // console.log(callback);
    const port  = process.env.PORT || 5000
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    };
    fetch(`http://localhost:${port}${string}`, requestOptions)
        .then((response) => {
            return response.json()
        }).then((data) => {
            callback(data)
        }).catch((err) => {
            console.log(err)
        });
}

module.exports = {
    postData
}