import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class ThankYou extends Component {

    handleNewFeedback = (event) => {
        this.props.history.push('/');
    }
    render() {
        // renders a button that allows the user to submit an additional feedback form
        return (
            <div>
                <header className="Thank-you-header">
                    <h1 className="Thank-you-title">Project Feedback Form</h1>
                </header>
                <div className="Feedback-body">
                    <Card className="Card">
                        <h2>Thank You!</h2>
                        <br />
                        <br />
                        <Button color="primary" variant="contained" onClick={this.handleNewFeedback}>Leave New Feedback</Button>
                    </Card>
                </div>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(ThankYou);