import React, { Component } from 'react';
import './App.css';
import { quotes } from './designersquote.json';
import DesignersQuote from './components/DesignersQuote.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Click the Paint button to generate a quote!"
    }
  }

  generateQuote() {
  let quote = quotes[Math.floor(Math.random()*quotes.length)];
  this.setState({quote: quote});
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>"designers quote"</h1>
        <button onClick={() => this.generateQuote()}>Paint</button>
      </header>
      <p className="App-intro">
        <DesignersQuote quote={this.state.quote} />
      </p>
    </div>
  );
 }
}

export default App;