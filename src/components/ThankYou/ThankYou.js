import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {
    render() {
        return (
            <div>
                <h1>Thank You!</h1>
            </div>
        )
    }
}


export default connect()(ThankYou);