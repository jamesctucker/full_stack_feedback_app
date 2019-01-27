import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {
    render() {
        return (
            <div>
                <header className="Thank-you-header">
                    <h1 className="Thank-you-title">Feedback!</h1>
                </header>
                <div className="Feedback-body">
                    <h1>Thank You!</h1>
                </div>
            </div>
        )
    }
}


export default connect()(ThankYou);