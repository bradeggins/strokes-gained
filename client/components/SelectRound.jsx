import React from 'react';
import { Link } from 'react-router-dom';

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
        return(
            <>
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" className="btn btn-primary">View a Round</button>
                    <div className="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            {this.state.rounds.map(item => <Link to={`/${item.id}/displayround`} key={item.id} className="dropdown-item">{item.course}, {item.round_date} </Link>)}
                        </div>
                    </div>
                </div>
           
            </>
        )
    }
}

export default SelectRound