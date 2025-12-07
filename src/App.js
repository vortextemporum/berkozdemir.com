import React, { Component } from 'react';
import './css/App.css';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import './css/background.css';

class App extends Component {
  render() {
    const loc = typeof window !== "undefined" ? window.location.pathname : "/";
    const id = loc === "/cv" ? "" : "gradient";

    return (
      <div className="fullscreen" id={id}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
