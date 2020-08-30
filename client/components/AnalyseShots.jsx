import React from 'react';
import { Link } from 'react-router-dom';

import { postData } from '../api'

class AnalyseShots extends React.Component {

    state = {
        items: []
    }


    handleChange = (event) => {
        const value  = event.target.value
        if (value == "sga" || value == "sgp") this.allowDistanceSelect(value)
        
        this.setState({
            [event.target.name]: value,
        })
        
    }

    allowDistanceSelect = (id) => {
        document.getElementById(id).removeAttribute("disabled")
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
                        <option value="sga">Strokes Gained Approach</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="sga_dist">Strokes Gained Approach</label>
                    <select onChange={this.handleChange} className="form-control" id="sga_dist" name="sga_dist" disabled>
                        <option value="50" selected>50-75</option>
                        <option value="75">75-100</option>
                        <option value="100">100-125</option>
                        <option value="125">125-150</option>
                        <option value="150">150-175</option>
                        <option value="175">175-200</option>
                        <option value="200">200 +</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="sgp_dist">Strokes Gained Putting</label>
                    <select onChange={this.handleChange} className="form-control" id="sgp_dist" name="sgp_dist" disabled>
                        <option value="0" selected>0-1.5m (0-5ft)</option>
                        <option value="1">1.5-3m (5-10ft)</option>
                        <option value="2">3-5m (10-15ft)</option>
                        <option value="3">5-7m (15-20ft)</option>
                        <option value="4">7-10m (20-30ft)</option>
                        <option value="5">10m-15m (30-50ft)</option>
                        <option value="6">15m + (50ft +)</option>
                    </select>
                </div>
                <div className="form-group">
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
                        