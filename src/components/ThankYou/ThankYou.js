import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {

    handleNewFeedback = (event) => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <header className="Thank-you-header">
                    <h1 className="Thank-you-title">Feedback!</h1>
                </header>
                <div className="Feedback-body">
                    <h1>Thank You!</h1>
                    <br />
                    <br />
                    <button onClick={this.handleNewFeedback}>Leave New Feedback</button>
                </div>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(ThankYou);