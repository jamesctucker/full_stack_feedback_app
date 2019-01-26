import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from './../Home/Home.js';
import Understanding from './../Understanding/Understanding.js';
import Support from './../Support/Support.js';
import Comments from './../Comments/Comments.js';
import { HashRouter as Router, Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/2" component={Understanding} />
            <Route exact path="/3" component={Support} />
            <Route exact path="/4" component={Comments} />
            <Route exact path="/5" component={ThankYou} />
          </div>
        </Router>
        <br />
      </div>
    );
  }
}

export default App;
