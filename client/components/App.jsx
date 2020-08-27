import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav';

function App (props) {

    return (
        <>
            <h1>App</h1>
            <Route path='/' component={Nav} />
        </>
    )
}

export default App