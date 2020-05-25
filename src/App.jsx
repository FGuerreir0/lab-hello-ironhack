import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Features from './features';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='App-header'>
          <div className='navbar'>
            <Navbar />
          </div>
          <h1>Say hello to ReactJS</h1>
          <h2>You will learn a Frontend framework from scratch, to become an Ninja Developer.</h2>

          <label>Awesome!</label>

          <Features />
        </header>
      </div>
    );
  }
}

export default App;
