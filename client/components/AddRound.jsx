import React from 'react';
import { Redirect } from 'react-router-dom'

class AddRound extends React.Component {
    state = {
        round_date: "Date",
        course: "ANGC",
        added: false
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
                this.setState({added: true, items: data})
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
    console.log(this.state);
    const {added} = this.state

    // redirect to shipping page after successful POST of email
    if (added === true)  

      return <Redirect push to={{ pathname: '/round/entershot', data: this.state}} />

      else
           return (
            <>
                <div className="form-group w-50 mx-auto">
                    <h1>Add a New Round</h1>
                    <label htmlFor="course" className="col-form-label">Course</label>
                    <input type="text" name="course" id="course" className="form-control" placeholder="Course" value={this.state.course} onChange={this.handleChange} />
                    <label htmlFor="round_date" className="col-form-label">Round Date</label>
                    <input type="date" name="round_date" id="round_date" className="form-control" value={this.state.round_date} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary btn-lg"onClick={this.postDataTest}>Add a round</button>
                </div>
            </>
        )
    }
}
export default AddRound

