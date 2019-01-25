import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>How are you feeling?</h1>
            </div>
        )
    }

}

export default connect()(Home);