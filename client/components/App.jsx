import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import AddRound from './AddRound';
import Entershot from './Entershot';
import SelectRound from './SelectRound';


function App (props) {

    return (
        <>
            <h1>App</h1>
            <Route path='/' component={ Nav } />
            <Route path='/addround' component={ AddRound } />
            <Route path='/round/:round_id/entershot' component= { Entershot } />
            <Route path='/selectround' component= { SelectRound } />
        </>
    )
}

export default App