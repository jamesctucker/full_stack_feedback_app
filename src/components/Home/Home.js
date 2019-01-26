import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <div>
                    <h1>How are you feeling today?</h1>
                </div>
            </div>
        )
    }

}

export default connect()(Home);