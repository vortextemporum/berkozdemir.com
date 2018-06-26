import React, { Component } from 'react';
import './css/App.css';
import Main from './components/main';
import Footer from './components/footer'
import Header from './components/header'
import './components/background';

class App extends Component {
  render() {
    return (
      <div className=''>
        <div id='gradient'>
          <Header />
          <div>
            <Main/>
            <Footer />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
