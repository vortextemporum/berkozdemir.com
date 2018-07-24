import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Portfolio from './portfolio.jsx'
import CV from './cv.jsx'
import News from './news.jsx'

import AwesomeSolos from './portfolio/works/awesomesolos.jsx';
import CacoPhony from './portfolio/works/cacophony.jsx'


const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route exact path='/works' component={Portfolio} />
        <Route path='/contact' component={Contact} />  
        <Route path='/cv' component={CV} /> 
        <Route path='/news' component={News} />       

        <Route path='/works/awesomesolos' component={AwesomeSolos} />
        <Route path='/works/cacophony' component={CacoPhony} />     
    </Switch>
)

export default Main;