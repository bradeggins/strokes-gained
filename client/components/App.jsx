import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import AddRound from './AddRound';


function App (props) {

    return (
        <>
            <h1>App</h1>
            <Route path='/' component={Nav} />
            <Route path='/addround' component={ AddRound } />

        </>
    )
}

export default App