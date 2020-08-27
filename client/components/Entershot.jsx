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
                <div className="form-group w-50 mx-auto">
                    <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" name="holed" id="holed" 
                        value="1" onChange={this.handleChange}/>
                        <label className="custom-control-label" htmlFor="holed">Holed?</label>
                    </div>
                </div>
            
            </>
                
                
                
            
        )
    }
}

export default Entershot


