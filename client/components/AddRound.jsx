import React from 'react';
import { Link } from 'react-router-dom'

class AddRound extends React.Component {
    state = {
        round_date: "Date",
        course: "ANGC"
    }

    
    port  = process.env.PORT || 5000
    postDataTest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch(`http://localhost:${this.port}/addround`, requestOptions)
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
            }).catch((err) => {
                console.log(err)
            });
    }

    handleChange = (event) => {
        const value  = event.target.value
        this.setState({
            [event.target.name]: value
        })
    }

    render(){
           return (
            <>
                <div className="form-group w-50 mx-auto">
                    <h1>Add a New Round</h1>
                    <label htmlFor="course" className="col-form-label">Course</label>
                    <input type="text" name="course" id="course" className="form-control" placeholder="Course" value={this.state.course} onChange={this.handleChange} />
                    <label htmlFor="round_date" className="col-form-label">Round Date</label>
                    <input type="date" name="round_date" id="round_date" className="form-control" value={this.state.round_date} onChange={this.handleChange} />
            
                    <Link to={'/round/entershot'}>
                    <button type="submit" className="btn btn-primary btn-lg"onClick={this.postDataTest}>Add a round</button>
                    </Link>
                </div>
            </>
        )
    }
}
export default AddRound

