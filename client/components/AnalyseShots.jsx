import React from 'react';
import { Link } from 'react-router-dom';

import { postData } from '../api'

class AnalyseShots extends React.Component {

    state = {
        data: 0,
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
        document.getElementById(`${id}_dist`).removeAttribute("disabled")
    }
  
    postForm = () => {
        postData('/analyseshots', 'POST', this.state, this.setData)              
    }

    setData = (data) => {
        this.setState({
            items: [...this.state.items, data]
        })
    }
    
    render(){
        console.log(this.state);
        return(
            <div className="w-50 mx-auto d-flex flex-column">
                <div className="form-group">
                    <label htmlFor="stat_type">Statistic Type</label>
                    <select onChange={this.handleChange} className="form-control" id="stat_type" name="stat_type">
                        <option defaultValue="select">Select a Type</option>
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
                        <option defaultValue="select">Select a Range</option>
                        <option value="50">50-75</option>
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
                        <option defaultValue="select">Select a Range</option>
                        <option value="0">0-1.5m (0-5ft)</option>
                        <option value="1">1.8-3m (6-10ft)</option>
                        <option value="2">3.3-4.5m (11-15ft)</option>
                        <option value="3">4.8-6m (16-20ft)</option>
                        <option value="4">6.5-9m (21-30ft)</option>
                        <option value="5">9.5-15m (31-50ft)</option>
                        <option value="6">15m + (50ft +)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="round_group">Rounds</label>
                    <select onChange={this.handleChange} className="form-control" id="round_group" name="round_group">
                        <option defaultValue="select">Select a Round History</option>
                        <option value="all">All Rounds</option>
                        <option value="1">Last Round</option>
                        <option value="5">Last 5 rounds</option>
                        <option value="10">Last 10 rounds</option>
                        <option value="20">Last 20 rounds</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary btn-lg"onClick={this.postForm}>Look Up</button>
                <h1>{this.state.items}, {this.state.stat_type}</h1>
            </div>
        )
    }
}

export default AnalyseShots
                        