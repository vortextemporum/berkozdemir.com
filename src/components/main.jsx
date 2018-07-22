import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio'
import CV from './cv'

import Rumba from './portfolio/works/rumba.jsx';
import AwesomeSolos from './portfolio/works/awesomesolos.jsx';
import RandomYoutubeDownloader from './portfolio/works/randomyoutubedownloader.jsx';
import TapeMd2eu from './portfolio/works/tapemd2eu.jsx'
import CacoPhony from './portfolio/works/cacophony.jsx'
import ItsSafetoJustLetGo from './portfolio/works/itssafetojustletgo.jsx'


const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route exact path='/works' component={Portfolio} />
        <Route path='/contact' component={Contact} />  
        <Route path='/cv' component={CV} />       

        <Route path='/works/rumba' component={Rumba} />
        <Route path='/works/awesomesolos' component={AwesomeSolos} />
        <Route path='/works/randomyoutubedownloader' component={RandomYoutubeDownloader} />  
        <Route path='/works/cacophony' component={CacoPhony} />     
        <Route path='/works/tapemd2eu' component={TapeMd2eu} />  
        <Route path='/works/itssafetojustletgo' component={ItsSafetoJustLetGo} />        
    </Switch>
)

export default Main;