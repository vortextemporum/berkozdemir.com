import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Landing from './landingpage.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Portfolio from './portfolio.jsx';
import CV from './cv.jsx';
import News from './news.jsx';
import PIYScores from './piyscores.jsx';
import Listen from './listen.jsx';
import CryptoThings from './crypto.jsx';

import PPPB from './portfolio/works/pppb.jsx';
import AwesomeSolos from './portfolio/works/awesomesolos.jsx';
import CacoPhony from './portfolio/works/cacophony.jsx';
import AvoidTheFeedback from './portfolio/works/avoidthefeedback.jsx';
import AudiosetCuts from './portfolio/works/audiosetcuts.jsx';
import Variations from './portfolio/works/variations.jsx';



class Main extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
      }
      
    render = () => {
        const {location} = this.props
        console.log("RouterPage", location.pathname)
        return (
            <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/about' component={About} />
            <Route exact path='/works' component={Portfolio} />
            <Route path='/contact' component={Contact} />  
            <Route path='/cv' component={CV} /> 
            <Route path='/news' component={News} />       
            <Route path='/piyscores' component={PIYScores} />       
            <Route path='/pppb' component={PPPB} />       
            <Route path='/listen' component={Listen} />  
            <Route path='/cryptothings' component={CryptoThings} />  


    
            <Route path='/things/awesomesolos' component={AwesomeSolos} />
            <Route path='/things/avoidthefeedback' component={AvoidTheFeedback} />
            <Route path='/things/cacophony' component={CacoPhony} />     
            <Route path='/audiosetcuts' component={AudiosetCuts} />     
            <Route path='/variations' component={Variations} />     
            </Switch>
        )
    }
}
// const ShowLocation = withRouter(Main);

export default withRouter(Main);

