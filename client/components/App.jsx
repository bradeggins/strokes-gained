import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import AddRound from './AddRound';
import Entershot from './Entershot';


function App (props) {

    return (
        <>
            <h1>App</h1>
            <Route path='/' component={Nav} />
            <Route path='/addround' component={ AddRound } />
            <Route path='/round/entershot' component= { Entershot } />
        </>
    )
}

export default App