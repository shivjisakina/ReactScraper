// Put routes in here so theyre required in index.js

import React, { Component } from 'react';
import {router} from 'react-router';
import {Route}  from 'router.Route';
import {Router} from 'router.Router';
import {hashHistory} from 'router.hashHistory';



import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="welcome">Welcome to HomeScraper</h2>
        </div>

      </div>
    );
  }
}

export default App;
