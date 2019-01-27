import React, { Component } from 'react';
import './App.css';
import Home from './../Home/Home.js';
import Understanding from './../Understanding/Understanding.js';
import Support from './../Support/Support.js';
import Comments from './../Comments/Comments.js';
import ThankYou from './../ThankYou/ThankYou.js';
import { HashRouter as Router, Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="App">
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
