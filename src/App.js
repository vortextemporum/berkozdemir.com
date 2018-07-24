import React, { Component } from 'react';
import './css/App.css';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import './css/background.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        id: "gradient"
    }
  }
  render() {
    return (
      <div className="fullscreen" id={this.state.id}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
export default App;
