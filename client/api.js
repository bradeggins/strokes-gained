

function postData (string, state, callback){
    console.log(state)
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
            console.log(data)
            callback(data)
            // this.setState({added: true, round_id: data.round_id})
            // // this.setState({added: true, data})
        }).catch((err) => {
            console.log(err)
        });
}

module.exports = {
    postData
}