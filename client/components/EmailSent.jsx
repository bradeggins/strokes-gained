import React from 'react';

class EmailSent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        if(this.props.status == "") return (null)

        else

        return(
            <div className="alert alert-dismissible alert-success">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>Nice work!</strong>Your email has been successfully sent!<a href="#" className="alert-link">this important alert message</a>.
            </div>

        )
    }
}

export default EmailSent