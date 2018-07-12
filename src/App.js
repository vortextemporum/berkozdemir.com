import React, { Component } from 'react';
import './css/App.css';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';
import './css/background.css';

class App extends Component {
  render() {
    return (
      <div id='gradient'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
export default App;
