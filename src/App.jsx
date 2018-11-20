import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router routes={Routes} history={browserHistory} />
    );
  }
}

export default App;
