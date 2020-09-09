import React from 'react';
import EmailSent from './EmailSent'
import { postData } from '../api'

class Contact extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        humanCheck: ""
    }

    handleChange = (event) => {
        const value  = event.target.value
        
        this.setState({
            [event.target.name]: value,
        })
    }

    formEnabled = () => {
        return this.isHumanInput(this.state.humanCheck) && this.emailIsValid(this.state.email)
    }

    //https://ui.dev/validate-email-address-javascript/
    emailIsValid = (email) => {
        return /\S+@\S+\.\S+/.test(email)
      }

    isHumanInput = (number) => {
        return Number(number) == 7 ? true : false
    }

    sendForm = () => {
        postData('/sendmail', 'POST', this.state, this.formSentOk)
    }

    formSentOk = (data) => {
        this.setState({status: data.status})
    }

render(){
    console.log(this.state);
    return(
        <div className="container d-flex responsive-container flex-column mt-5">
            <EmailSent status={this.state.status} />
            <h1 role="heading">Contact Us!</h1>
            <div className="form-group">
                <label className="col-form-label" htmlFor="name">Name</label>
                <input type="text" autoFocus={true} className="form-control" placeholder="Name" name="name" id="name" onChange={this.handleChange}></input>
            </div>
            <div>
                <label className="col-form-label" htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Your Email" onChange={this.handleChange}></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" name="subject" placeholder="Subject" id="subject" onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="5" onChange={this.handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="humanCheck">Are you a human? 5 + 2 = ?</label>
                    <input type="text" className="form-control" placeholder="Answer" name="humanCheck" id="humanCheck" onChange={this.handleChange}></input>
                </div>
               
                <button type="submit" className="btn btn-primary" disabled={!this.formEnabled()} onClick={this.sendForm}>Submit</button>
        </div>
        )
    }
}

export default Contact