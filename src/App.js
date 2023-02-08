import React, { Component } from 'react'
import logo from './2021_KBE_logo_final_RGB_B.svg';
import './App.css';

class App extends Component {
  intervalID;

  state = {
      quote: {},
  }
  
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
              <div>
                <div>Id: {this.state.quote.id}</div>
                <div>Hostname: <strong>{this.state.quote.hostname}</strong></div>
                <h3>"{this.state.quote.quotation}"</h3> -- {this.state.quote.author}
            </div>                <br/>
                <input name="URL" placeholder="Quotes service URL goes here" type="text" style={{width: 800}} onChange={this.handleURL} />
                <br/>
                <p><button id='pictureButton' className='Button' onClick={this.start}>Start</button></p>             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getData = () => {
    try {
        fetch(window.quotesURL)
        .then(response => response.json())
            .then(data => {
                this.setState({quote:data});
                // call getData() again in N seconds
                this.intervalID = setTimeout(this.getData.bind(this), 2000);
            });
            } catch (e) {
        console.log('Error')
        }
  }

  handleURL = event => {
    window.quotesURL = event.target.value;
  };

  start = () => {
    console.log(window.quotesURL);
    this.getData();
  }
}


export default App;
