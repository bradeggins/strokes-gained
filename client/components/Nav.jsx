import React from 'react';  
import {Link} from 'react-router-dom';
import SelectRound from './SelectRound';


const Nav = (props) => {
    return (
            <>        
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to='/'>Strokes Gained</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/addround" className="nav-link" >Add a Round<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/selectround" className="nav-link">View Rounds</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/analyseshots" className="nav-link">Analyse Rounds</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/howtouse" className="nav-link">How to Use</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </>
    )
}

export default Nav