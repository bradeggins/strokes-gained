import React from 'react';
import { render } from 'react-dom';

class AddRound extends React.Component {
    state = {
        round_date: "Date",
        course: "ANGC"
    }

    handleChange = (event) => {
        const value  = event.target.value
        this.setState({
            
            [event.target.name]: value

        })
    }
    render(){
        console.log(this.state)
        return (
            <>
                <input type="text" name="course" id="course" placeholder="Course" value={this.state.course} onChange={this.handleChange} />
                <label htmlFor="course">Course</label>
                <input type="text" name="round_date" id="round_date" placeholder="Round Date" value={this.state.round_date} onChange={this.handleChange} />
                <label htmlFor="round_date">Round Date</label>
            </>
        )
    }
}
export default AddRound