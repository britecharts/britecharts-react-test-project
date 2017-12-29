import React, { Component } from 'react';
import reactLogo from './logos/react.svg';
import britechartsLogo from './logos/britecharts-react.svg';
import './App.css';

import DonutChartImport from './donut/DonutChartImport';
import DonutChartCommonJS from './donut/DonutChartCommonJS';

// import DonutChartLibESM from './donut/DonutChartLibESM';
import DonutChartLibCJS from './donut/DonutChartLibCJS';

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
          <h3>Loading with ES2015 imports from dist/</h3>
          <DonutChartImport />
        </div>
        <div className="chart-container">
          <h3>Loading with common JS from dist/</h3>
          <DonutChartCommonJS />
        </div>
        <div className="chart-container">
          <h3>Loading with ES Modules from lib/</h3>
          {/* <DonutChartLibESM /> */}
        </div>
        <div className="chart-container">
          <h3>Loading with Common JS from lib/</h3>
          <DonutChartLibCJS />
        </div>
      </div>
    );
  }
}

export default App;
