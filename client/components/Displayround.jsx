import React from 'react';
import RenderLineChart from './RenderLineChart';
import { postData } from '../api'

class Displayround extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            round_id: this.props.round_id || this.props.match.params.round_id
        }
    }

    componentDidMount(){
            postData('/displayround', 'POST', this.state, this.setData)
    }
   
    componentDidUpdate(prevProps, prevState){
        if(this.state.items === prevState.items) postData('/displayround', 'POST', this.state, this.setData)      
    }

    setData = (data) => {
        if(data != this.state.items){
            this.setState({items: data})
        }
    }

    render(){
        return(
            <>
            <div className="responsive-container mx-auto mt-5">
                <div className="round-table">
                    <h1>Shots</h1>
                    <table className="table table-hover">
                        <tbody>
                            <tr className="table-primary">
                                <th scope="row">Hole Number</th>
                                <td>Distance to Hole</td>
                                <td>Shot From(Lie)</td>
                                <td>Average Strokes to Hole</td>
                                <td>Strokes Gained</td>
                            </tr>
                                {this.state.items.map(item => 
                                    <tr className={item.hole_number % 2 == 0 ? "table-secondary": ""} key={item.id}>
                                        <th scope="row">{item.hole_number}</th>
                                        <td>{item.dist_to_hole}</td>
                                        <td>{item.shot_from}</td>
                                        <td>{item.strokes_to_hole}</td>
                                        <td>{item.sg}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table> 
                </div>
                
                <RenderLineChart round={this.state}/>
                
            </div>
        </>
        )
    }
}

export default  Displayround
