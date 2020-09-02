import React from 'react';
import { Link } from 'react-router-dom'

class Landing extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
                <div className="jumbotron mx-auto">
                    <h1 className="display-3">Powerful Statistics, Simple Round Entry</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"></hr>
                        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                        <Link className="btn btn-primary btn-lg" to="/addround" role="button">Get Started</Link>
                    </p>
                </div>

        )
    }

}

export default Landing