import React, {Component} from 'react';
import CardList from './portfolio/cardlist';
import SearchBox from './portfolio/searchBox.jsx'
import {projects} from './portfolio/projectlist.jsx'
import "../css/portfolio.css"

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projects: projects,
            searchfield: '',
            activeTab: 'all'
        }
    }

    handleOptionChange = (event) => {
        this.setState({activeTab: event.target.value});
    }

    ColorizeTitle() {
        const randomcolor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        let title = document.getElementById("works");
        let text = title.innerText;
        let newText = "";
        //sonra kullanmak için


        for (let char = 0; char < text.length; char++) {
            let letter = text[char];

            if (text[char] !== " ") {
                letter = letter.fontcolor(randomcolor()); 
            };
            newText += letter;

        // add rgba background to all letters
        }
        return title.innerHTML = newText;
    }



    componentDidMount() {
        this.ColorizeTitle();
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
                <pre id="works" className="fw-7">`7MMF'{"     "}A{"     "}`7MF' .g8""8q. `7MM"""Mq.{"  "}`7MMF' `YMM'{"  "}.M"""bgd {"\n"}{"  "}`MA{"     "},MA{"     "},V .dP'{"    "}`YM. MM{"   "}`MM.{"   "}MM{"   "}.M'{"   "},MI{"    "}"Y {"\n"}{"   "}VM:{"   "},VVM:{"   "},V{"  "}dM'{"      "}`MM MM{"   "},M9{"    "}MM .d"{"     "}`MMb.{"     "}{"\n"}{"    "}MM.{"  "}M' MM.{"  "}M'{"  "}MM{"        "}MM MMmmdM9{"     "}MMMMM.{"       "}`YMMNq. {"\n"}{"    "}`MM A'{"  "}`MM A'{"   "}MM.{"      "},MP MM{"  "}YM.{"     "}MM{"  "}VMA{"    "}.{"     "}`MM {"\n"}{"     "}:MM;{"    "}:MM;{"    "}`Mb.{"    "},dP' MM{"   "}`Mb.{"   "}MM{"   "}`MM.{"  "}Mb{"     "}dM {"\n"}{"      "}VF{"      "}VF{"       "}`"bmmd"' .JMML. .JMM..JMML.{"   "}MMb.P"Ybmmd"{"  "}</pre>
                <SearchBox className="" searchChange={this.onSearchChange} />
                <div className="tracked code tc mw7 center">
                    <input id="tab1" type="radio" value="all" 
                        checked={this.state.activeTab === 'all'}
                        onChange={this.handleOptionChange} 
                        className="dn" />
                    <label htmlFor="tab1" className="f6 f5-l bg-animate black-80 hover-bg-light-blue pointer:hover dib pa3 ph4-l">#all</label>
                    
                    <input id="tab2" type="radio" value="audio" 
                        checked={this.state.activeTab === 'audio'}
                        onChange={this.handleOptionChange}
                        className="dn" />
                    <label htmlFor="tab2" className="f6 f5-l bg-animate black-80 hover-bg-light-green pointer:hover dib pa3 ph4-l">#music</label>
                    
                    <input id="tab3" type="radio" value="video" 
                        checked={this.state.activeTab === 'video'}
                        onChange={this.handleOptionChange}
                        className="dn" />
                    <label htmlFor="tab3" className="f6 f5-l bg-animate black-80 hover-bg-light-pink pointer:hover dib pa3 ph4-l">#video</label>
                    
                    <input id="tab4" type="radio" value="software" 
                        checked={this.state.activeTab === 'software'}
                        onChange={this.handleOptionChange}
                        className="dn" />
                    <label htmlFor="tab4" className="f6 f5-l bg-animate black-80 hover-bg-light-yellow pointer:hover dib pa3 ph4-l">#software</label>
                    
                    <input id="tab5" type="radio" value="python" 
                        checked={this.state.activeTab === 'python'}
                        onChange={this.handleOptionChange}
                        className="dn" />
                    <label htmlFor="tab5" className="f6 f5-l bg-animate black-80 hover-bg-light-red pointer:hover dib pa3 ph4-l">#python</label>
                    
                    <input id="tab6" type="radio" value="max" 
                        checked={this.state.activeTab === 'max'}
                        onChange={this.handleOptionChange}
                        className="dn" />
                    <label htmlFor="tab6" className="f6 f5-l bg-animate black-80 hover-bg-light-purple pointer:hover dib pa3 ph4-l">#max/msp/jitter</label>
                    
                    <input id="tab7" type="radio" value="gmod" 
                        checked={this.state.activeTab === 'gmod'}
                        onChange={this.handleOptionChange}
                        className="dn" />
                    <label htmlFor="tab7" className="f6 f5-l bg-animate black-80 hover-bg-light-blue pointer:hover dib pa3 ph4-l">#garrysmod</label>
                    
                    <input id="tab8" type="radio" value="game" 
                        checked={this.state.activeTab === 'game'}
                        onChange={this.handleOptionChange}
                        className="dn" />
                    <label htmlFor="tab8" className="f6 f5-l bg-animate black-80 hover-bg-light-green pointer:hover dib pa3 ph4-l">#game</label>
                    
                    <input id="tab9" type="radio" value="webart" 
                        checked={this.state.activeTab === 'webart'}
                        onChange={this.handleOptionChange}
                        className="dn" />
                    <label htmlFor="tab9" className="f6 f5-l bg-animate black-80 hover-bg-light-pink pointer:hover dib pa3 ph4-l">#webart</label>
                    
                    <input id="tab10" type="radio" value="webart" 
                        checked={this.state.activeTab === 'webart'}
                        onChange={this.handleOptionChange}
                        className="dn" />
                    <label htmlFor="tab9" className="f6 f5-l bg-animate black-80 hover-bg-light-pink pointer:hover dib pa3 ph4-l">#webart</label>
 
                </div>
               
                <CardList projects={filteredProjects}/>  
                

            </div>
    ); }
    
}

export default Portfolio;