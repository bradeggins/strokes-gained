import React from 'react';  

class Entershot extends React.Component {
    constructor(props){
        super(props)
    }
    
    state = {
        shot_from: "",
        dist_to_hole: "",
        round_id: 3,
        holed: ""
    }

    handleChange = (event) => {
        const value  = event.target.value
        this.setState({
            [event.target.name]: value
        })
    }

  
    port  = process.env.PORT || 5000
    postDataTest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch(`http://localhost:${this.port}/round/entershot`, requestOptions)
            .then((response) => {
                return response.json()
            }).then((data) => {
                this.resetForm()
                            
            }).catch((err) => {
                console.log(err)
            });
    }

    resetForm(){
        this.setState({
            shot_from: "",
            dist_to_hole: "",
            round_id: 3,
            holed: ""
        })
        document.getElementById('holed').checked = false
    }

    render(){
        console.log(this.props.location.data);
        return (
            <>
                <div className="form-group w-50 mx-auto d-flex flex-column">
                    <label htmlFor="shot_from" className="col-form-label-lg">Shot From</label>
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

        <button type="submit" className="btn btn-primary btn-lg"onClick={this.postDataTest}>{`Add shot ${this.state.dist_to_hole} ${this.state.shot_from}`}</button>
                </div>
            
            </>
                
                
                
            
        )
    }
}

export default Entershot


