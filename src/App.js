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
        id: "gradient",
        loc: "/",
    };
    // console.log("constructor",window.location.pathname)
  }

  render() {

    // console.log("Apprender", window.location.pathname);
    this.state.loc = window.location.pathname;
    console.log("state", this.state.loc);
    if (this.state.loc === "/cv") {
      this.state.id = ""
    } else {
      this.state.id = "gradient"
    }
    
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
