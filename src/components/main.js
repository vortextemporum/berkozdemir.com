import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio'
import CV from './cv'


const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />  
        <Route exact path='/cv' component={CV} />         
    </Switch>
)

export default Main;