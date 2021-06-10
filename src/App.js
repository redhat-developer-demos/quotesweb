import React, { Component } from 'react'
import Quotes from './components/quotes'
import logo from './2021_KBE_logo_final_RGB_B.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <div className="col-xs-12">
            <h1>QuoteWeb</h1>
            <h6>Retrieves a quote every N seconds</h6>
            <div className="card">
              <div className="card-body">
                <Quotes />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
