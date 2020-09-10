function postData (string, request, state, callback){
    // const port  = process.env.PORT || 5000
    const requestOptions = {
        method: request,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    };


    fetch(`${string}`, requestOptions)
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