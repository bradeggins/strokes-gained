import React from 'react';  
import Displayround from './Displayround'
import { postData } from '../api'
import WarningBanner from './WarningBanner';

class Entershot extends React.Component {
    constructor(props){
        super(props)
    }
    
    state = {
        shot_from: "",
        dist_to_hole: "",
        round_id: "",
        holed: "",
        showWarning: false,
        err: ""
    }

    formEnable = () => {
        return this.state.shot_from == "" || this.state.dist_to_hole == "" ? true : false
    }

    handleChange = (event) => {
        const value  = event.target.value
        const {round_id} = this.props.match.params
        this.setState({
            [event.target.name]: value,
            round_id
        })
    }

    postForm = (event) => {
        event.preventDefault()
        postData('/round/entershot', 'POST', this.state, this.setData)              
    }

    setData = (data) => {
        if(data.err != null){
            this.setState({showWarning:true, err: data.err})
        }
        this.resetForm()
    }


    resetForm = () => {
        this.setState({
            shot_from: "",
            dist_to_hole: "",
            holed: ""
        })
        document.getElementById('holed').checked = false
    }

    resetWarning = () => {
        this.setState({showWarning:false})
    }

    render(){
        console.log(this.state)
        return (
            <>
                <div className="form-group responsive-container mx-auto d-flex flex-column">
                <WarningBanner warn={this.state.showWarning} err={this.state.err} onClick={this.resetWarning} />
       
                        <label htmlFor="shot_from" className="col-form-label-lg">Shot From</label>
                    <form onSubmit={this.postForm}>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button name="shot_from" type="button" className="btn btn-primary" onClick={this.handleChange} value="T">Tee</button>
                        <button name="shot_from" type="button" className="btn btn-primary" onClick={this.handleChange} value="F">Fairway</button>
                        <button name="shot_from" type="button" className="btn btn-primary" onClick={this.handleChange} value="G">Green</button>
                        <button name="shot_from" type="button" className="btn btn-primary" onClick={this.handleChange} value="R">Rough</button>
                        <button name="shot_from" type="button" className="btn btn-primary" onClick={this.handleChange} value="S">Sand</button>
                        <button name="shot_from" type="button" className="btn btn-primary" onClick={this.handleChange} value="RC">Recovery</button>
                        <button name="shot_from" type="button" className="btn btn-primary" onClick={this.handleChange} value="P">Penalty</button>

                    </div>
            
                    <div className="form-group">
                        <label htmlFor="dist_to_hole" className="col-form-label-lg">Distance to Hole</label>
                        <input type="" name="dist_to_hole" id="dist_to_hole" className="form-control form-control-lg" value={this.state.dist_to_hole} onChange={this.handleChange} />
                    </div>
                    
                    <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" name="holed" id="holed" value="true" onChange={this.handleChange}/>
                        <label className="custom-control-label" htmlFor="holed">Holed?</label>
                    </div>
                    
                        <button type="submit" className="btn btn-primary btn-lg" disabled={this.formEnable()}>{`Add shot ${this.state.dist_to_hole} ${this.state.shot_from}`}</button>
                    </form>
                </div>
                <Displayround round_id={this.props.match.params.round_id}/>
            
            </>
                
        )
    }
}

export default Entershot



