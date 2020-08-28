import React from 'react';
import { Redirect } from 'react-router-dom'
import { postData } from '../api'


class AddRound extends React.Component {
    state = {
        round_date: "Date",
        course: "ANGC",
        added: false
    }

    handleChange = (event) => {
        const value  = event.target.value
        this.setState({
            [event.target.name]: value
        })
    }

    postForm = () => {
        postData('/addround', this.state, this.setData)
              
    }

    setData = (data) => {
        this.setState(data)
    }


    render(){
   
        const {added} = this.state
        if (added === true)  
        return <Redirect push to={{ pathname: `/round/${this.state.round_id}/entershot`, data:this.state}} />
        else
            return (
                <>
                    <div className="form-group w-50 mx-auto">
                        <h1>Add a New Round</h1>
                        <label htmlFor="course" className="col-form-label">Course</label>
                        <input type="text" name="course" id="course" className="form-control" placeholder="Course" value={this.state.course} onChange={this.handleChange} />
                        <label htmlFor="round_date" className="col-form-label">Round Date</label>
                        <input type="date" name="round_date" id="round_date" className="form-control" value={this.state.round_date} onChange={this.handleChange} />
                        <button type="submit" className="btn btn-primary btn-lg"onClick={this.postForm}>Add a round</button>
                    </div>
                </>
            )
        }
}
export default AddRound

