import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <div>
                    <h1>How well are you understanding the content?</h1>
                </div>
            </div>
        )
    }
}


export default connect()(Understanding);
