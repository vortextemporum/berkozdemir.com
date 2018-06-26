import React, {Component} from 'react';
import CardList from './portfolio/cardlist';
import SearchBox from './portfolio/searchBox.jsx'
import {projects} from './portfolio/projectlist'
import Scroll from './portfolio/scroll.jsx'
import { Window, TitleBar, Toolbar, SearchField, Text  } from 'react-desktop/macOs';


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
        const filteredProjects = projects.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        return !projects.length ?
            <h1>Loading</h1> :
        (    
            <div className='tc'>
                <h1 classname='f1'>Portfolio</h1>
                <SearchBox searchChange={this.onSearchChange} />
               
                
                <CardList projects={filteredProjects}/>  

                <Window
        chrome
        height="300px"
        padding="10px"
      >
        <TitleBar title="untitled text 5" controls>
        <SearchField
            placeholder="Search"
            defaultValue=""
            onChange={this.handleChange}
          />
        </TitleBar>
        <Text>Hello World</Text>
      </Window>
            </div>
    ); }
    
}

export default Portfolio;