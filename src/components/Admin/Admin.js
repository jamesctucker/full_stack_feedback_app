import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App/App.css';

class Admin extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Project Feedback Form</h1>
                    <h4><i>Admin Review</i></h4>
                </header>
            </div>

        )
    }
}

export default connect()(Admin);