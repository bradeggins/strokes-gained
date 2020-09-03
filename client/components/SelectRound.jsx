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
            <div className="d-flex flex-column responsive-container mx-auto mt-5">
                <h1>Select an entry to view the round</h1>
                    {this.state.rounds.map(item => 
                    <div className="card border-primary mb-3" key={item.id}>
                        <div className="card-header"><Link to={`/${item.id}/displayround`}>{item.course}</Link></div>
                        <div className="card-body">
                            <h4 className="card-title"><Link to={`/${item.id}/displayround`}>{item.round_date}</Link></h4>
                        </div>
                    </div>
                    )}
            </div>
           
            </>
        )
    }
}

export default SelectRound