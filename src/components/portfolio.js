import React, {Component} from 'react';
import CardList from './portfolio/cardlist';
import SearchBox from './portfolio/searchBox.jsx'
import {projects} from './portfolio/projectlist'
import Scroll from './portfolio/scroll.jsx'
import { Window, TitleBar, Toolbar, SearchField, Text, SegmentedControl, SegmentedControlItem  } from 'react-desktop/macOs';
import "../css/works.css"

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projects: projects,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=> response.json())
    //         .then(users => this.setState({ projects: users }));
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        
    }
    render() {
        const {projects, searchfield} = this.state;
        const filteredProjects = projects.filter(project => {
            return project.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        return !projects.length ?
            <h1>Loading</h1> :
        (    
            <div className='tc'>
                <pre id="works" className="fw-7">`7MMF'{"     "}A{"     "}`7MF' .g8""8q. `7MM"""Mq.{"  "}`7MMF' `YMM'{"  "}.M"""bgd {"\n"}{"  "}`MA{"     "},MA{"     "},V .dP'{"    "}`YM. MM{"   "}`MM.{"   "}MM{"   "}.M'{"   "},MI{"    "}"Y {"\n"}{"   "}VM:{"   "},VVM:{"   "},V{"  "}dM'{"      "}`MM MM{"   "},M9{"    "}MM .d"{"     "}`MMb.{"     "}{"\n"}{"    "}MM.{"  "}M' MM.{"  "}M'{"  "}MM{"        "}MM MMmmdM9{"     "}MMMMM.{"       "}`YMMNq. {"\n"}{"    "}`MM A'{"  "}`MM A'{"   "}MM.{"      "},MP MM{"  "}YM.{"     "}MM{"  "}VMA{"    "}.{"     "}`MM {"\n"}{"     "}:MM;{"    "}:MM;{"    "}`Mb.{"    "},dP' MM{"   "}`Mb.{"   "}MM{"   "}`MM.{"  "}Mb{"     "}dM {"\n"}{"      "}VF{"      "}VF{"       "}`"bmmd"' .JMML. .JMM..JMML.{"   "}MMb.P"Ybmmd"{"  "}</pre>
                <nav class="bt bb tc mw7 center mt4">
                    <a class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">All</a>
                    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/">Audio</a>
                    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/">Video</a>
                    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/">Software</a>
                    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/">Text</a>
                </nav>
                <SearchBox searchChange={this.onSearchChange} />
               
                
                <CardList projects={filteredProjects}/>  

            </div>
    ); }
    
}

export default Portfolio;