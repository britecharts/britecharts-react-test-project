import React, { Component } from 'react';
import reactLogo from './logos/react.svg';
import britechartsLogo from './logos/britecharts-react.svg';
import './App.css';

import DonutChart from './donut/DonutChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={britechartsLogo} className="brc-logo" alt="Britecharts-React logo" />
          <img src={reactLogo} className="react-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Britecharts-React demo project!</h1>
        </header>
        <div className="chart-container">
          <h3>Loading with ES2015 imports</h3>
          <DonutChart />
        </div>
      </div>
    );
  }
}

export default App;
