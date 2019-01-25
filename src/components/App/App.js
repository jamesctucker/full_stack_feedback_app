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
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/comments" component={Comments} />
          </div>
        </Router>
        <br />
      </div>
    );
  }
}

export default App;
