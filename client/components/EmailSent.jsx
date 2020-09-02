import React from 'react';

class EmailSent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);

        if(!this.props.status) return (
            null
        )

        if(this.props.status == 'fail') 
        return (
            <div class="alert alert-dismissible alert-danger">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Oh snap!</strong><a href="mailto:strokesgainedstats@gmail.com" class="alert-link"> Something went wrong, email us at strokesgainedstats@gmail.com</a> 
            </div>
        )

        else if(this.props.status == 'success')

        return(
            <div className="alert alert-dismissible alert-success">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>Nice work!</strong> Your email has been successfully sent!<a href="#" className="alert-link"></a>
            </div>
        )
    }
}

export default EmailSent