import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <div>
                    <h1>Any comments you want to leave?</h1>
                </div>
            </div>
        )
    }
}


export default connect()(Comments);