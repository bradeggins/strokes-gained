import React from 'react';

class Displayround extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            
        }
    }

   

    componentDidMount(){
  
    }

    render(){
        console.log(this.props);
        console.log(this.state);
        return(
            <>
            <h1>Display Round</h1>
            {this.state.items.map(item => <h1>{item.dist_to_hole} </h1> )}
            </>
        )
    }
}

export default  Displayround