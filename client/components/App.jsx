import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import AddRound from './AddRound';
import Entershot from './Entershot';
import SelectRound from './SelectRound';
import Displayround from './Displayround';
import RenderLineChart from './RenderLineChart';
import AnalyseShots from './AnalyseShots';
import Contact from './Contact';
import HowToUse from './HowToUse';
import AnalyseChart from './AnalyseChart'
import Landing from './Landing';



function App (props) {

    return (
        <>
            <Route path='/' component={ Nav } />
            <Route exact path='/' component={ Landing } />
            <Route path='/addround' component={ AddRound } />
            <Route path='/round/:round_id/entershot' component= { Entershot } />
            <Route path='/selectround' component= { SelectRound } />
            <Route exact path='/:round_id/displayround' component= { Displayround } />
            <Route path='/chart' component={RenderLineChart} />
            <Route exact path='/analyseshots' component={ AnalyseShots } />
            <Route path='/contact' component={Contact} />
            <Route path='/howtouse' component={HowToUse} />
            <Route path='/analysechart' component={AnalyseChart} />


        </>
    )
}

export default App