import React, {Component} from 'react';
import CardList from './portfolio/cardlist';
import SearchBox from './portfolio/searchBox.jsx'
import {projects} from './portfolio/projectlist'
// import Scroll from './portfolio/scroll.jsx'
// import { Window, TitleBar, Toolbar, SearchField, Text, SegmentedControl, SegmentedControlItem  } from 'react-desktop/macOs';
import "../css/works.css"

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projects: projects,
            searchfield: '',
            activeTab: 'all'
        }
    }

    ColorWorks() {
        const randomcolor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        let title = document.getElementById("works");
        let text = title.innerText;
        let newText = "";
        //sonra kullanmak için


        for (let char = 0; char < text.length; char++) {
            let letter = text[char];
            letter = letter.fontcolor(randomcolor());
            newText += letter;

        // add rgba background to all letters
        }
        return title.innerHTML = newText;
    }

    componentDidMount() {
        this.ColorWorks();
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render() {
        const {projects, searchfield, activeTab} = this.state;
        const filteredTags = projects.filter(project => {
            return project.tags.includes(activeTab)
        });
        const filteredProjects = filteredTags.filter(project => {
            return project.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        

        return !projects.length ?
            <h1>Loading</h1> :
        (    
            <div className='tc'>
                <pre id="works" className="fw-7 ">`7MMF'{"     "}A{"     "}`7MF' .g8""8q. `7MM"""Mq.{"  "}`7MMF' `YMM'{"  "}.M"""bgd {"\n"}{"  "}`MA{"     "},MA{"     "},V .dP'{"    "}`YM. MM{"   "}`MM.{"   "}MM{"   "}.M'{"   "},MI{"    "}"Y {"\n"}{"   "}VM:{"   "},VVM:{"   "},V{"  "}dM'{"      "}`MM MM{"   "},M9{"    "}MM .d"{"     "}`MMb.{"     "}{"\n"}{"    "}MM.{"  "}M' MM.{"  "}M'{"  "}MM{"        "}MM MMmmdM9{"     "}MMMMM.{"       "}`YMMNq. {"\n"}{"    "}`MM A'{"  "}`MM A'{"   "}MM.{"      "},MP MM{"  "}YM.{"     "}MM{"  "}VMA{"    "}.{"     "}`MM {"\n"}{"     "}:MM;{"    "}:MM;{"    "}`Mb.{"    "},dP' MM{"   "}`Mb.{"   "}MM{"   "}`MM.{"  "}Mb{"     "}dM {"\n"}{"      "}VF{"      "}VF{"       "}`"bmmd"' .JMML. .JMM..JMML.{"   "}MMb.P"Ybmmd"{"  "}</pre>
                <SearchBox className="" searchChange={this.onSearchChange} />
                <nav className="code tc mw7 center tracked">
                    <span className="f6 f5-l bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() => this.setState({activeTab: "all"})}>#all</span>
                    <span className="f6 f5-l bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" onClick={() => this.setState({activeTab: "audio"})}>#audio</span>
                    <span className="f6 f5-l bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" onClick={() => this.setState({activeTab: "video"})}>#video</span>
                    <span className="f6 f5-l bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" onClick={() => this.setState({activeTab: "software"})}>#software</span>
                    <span className="f6 f5-l bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" onClick={() => this.setState({activeTab: "text"})}>#text</span>
                </nav>
               
                <CardList projects={filteredProjects}/>  
                

            </div>
    ); }
    
}


export default Portfolio;