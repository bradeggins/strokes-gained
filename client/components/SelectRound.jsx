import React from 'react';

import { postData } from '../api'

class SelectRound extends React.Component {

    state = {
        rounds: []
    }

    componentDidMount(){
        postData('/selectround', 'POST', undefined, this.setData)
    }

    setData = (data) => {
        this.setState(data)       
    }

    
    render(){
        console.log(this.state)
        return(
            <>
            {this.state.rounds.map(item => <h1 key={item.id}>{item.course}, {item.round_date} </h1>)}
            </>
        )
    }
}

export default SelectRound