import React from 'react';
import { Link } from 'react-router-dom';

import { postData } from '../api'

class AnalyseShots extends React.Component {

    state = {
        items: []
    }


    handleChange = (event) => {
        const value  = event.target.value
        console.log(value)
        this.setState({
            [event.target.name]: value,
        })
    }

  
    postForm = () => {
        postData('/analyseshots', 'POST', this.state, this.setData)              
    }

    setData = () => {
        this.setState({
            items: data
        })
    }
    
    render(){
        console.log(this.state);
        return(
            <>
                <div className="form-group">
                    <label htmlFor="stat_type">Statistic Type</label>
                    <select onChange={this.handleChange} className="form-control" id="stat_type" name="stat_type">
                        <option value='sgt'> Strokes Gained Total</option>
                        <option value="sgott">Strokes Gained Off the Tee</option>
                        <option value="sgt2g">Strokes Gained Tee to Green</option>
                        <option value="sgp">Strokes Gained Putting</option>
                        <option value="sgatg">Strokes Gained Around the Green</option>
                        <option value="sga50">Strokes Gained Approach 50-75</option>
                        <option value="sga75">Strokes Gained Approach 75-100</option>
                        <option value="sga100">Strokes Gained Approach 100-125</option>
                        <option value="sga125">Strokes Gained Approach 125-150</option>
                        <option value="sga150">Strokes Gained Approach 150-175</option>
                        <option value="sga175">Strokes Gained Approach 175-200</option>
                        <option value="sga200">Strokes Gained Approach 200 +</option>
                    </select>
                    </div> <div className="form-group">
                    <label htmlFor="round_group">Rounds</label>
                    <select onChange={this.handleChange} className="form-control" id="round_group" name="round_group">
                        <option value="all">All Rounds</option>
                        <option value="1">Last Round</option>
                        <option value="5">Last 5 rounds</option>
                        <option value="10">Last 10 rounds</option>
                        <option value="20">Last 20 rounds</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary btn-lg"onClick={this.postForm}>Look Up</button>

            </>
        )
    }
}

export default AnalyseShots