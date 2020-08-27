import React from 'react';  

class Entershot extends React.Component {
    
    state = {
        shot_from: "",
        dist_to_hole: 0,
        round_id: 0,
        holed: ""
    }

    handleChange = (event) => {
        const value  = event.target.value
        this.setState({
            [event.target.name]: value
        })
    }

    // port  = process.env.PORT || 5000
    // postDataTest = () => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(this.state)
    //     };
    //     fetch(`http://localhost:${this.port}/addround`, requestOptions)
    //         .then((response) => {
    //             return response.json()
    //         }).then((data) => {
    //             console.log(data)
    //         }).catch((err) => {
    //             console.log(err)
    //         });
    // }

    render(){
        console.log(this.state)
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
                        <input type="" name="dist_to_hole" id="dist_to_hole" className="form-control form-control-lg" value={this.state.round_date} onChange={this.handleChange} />
                    </div>
                    
                    <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" name="holed" id="holed" value="1" onChange={this.handleChange}/>
                        <label className="custom-control-label" htmlFor="holed">Holed?</label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg"onClick={this.postDataTest}>Add shot</button>
                </div>
            
            </>
                
                
                
            
        )
    }
}

export default Entershot


