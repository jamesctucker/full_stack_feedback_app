import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import '../App/App.css';



class Support extends Component {
    handleNextBtn = (event) => {
        this.props.history.push('/4');
    }
    // this function sends support rating to the reducer and then resets the rating back to null
    handleSubmitBtn = (event) => {
        const action = { type: 'UPDATE_SUPPORT', payload: this.state.rating };
        this.props.dispatch(action);
        this.setState({
            rating: '',
        })
    }

    // this function updates the state
    updateSupportRating = (event) => {
        this.setState({
            rating: event.target.value,
        })
    }
    render() {
        // conditional rendering determines which 'submit' button is implemented on the page
        let status = '';
        let text = '';
        if (this.props.reduxStore.feeling === 0 ||
            this.props.reduxStore.understanding === 0 ||
            this.props.reduxStore.support === 0 ||
            this.props.reduxStore.comments === '') {
            text = "Please Finish Before Submitting"
            status = true;

        } else {
            text = "Submit Final Feedback"
            status = false;
        }
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Project Feedback Form</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <div className="Feedback-body">
                    <Card className="Card">
                        <h2>How well are you being supported?</h2>
                        <p><i>On a scale of 1 - 5, with 5 being the best</i></p>
                        <Input id="Rating-input" onChange={this.updateSupportRating}
                            className="Feedback-input" type="number">
                        </Input>
                        <br />
                        <br />
                        <Button id="Submit-btn" variant="contained"
                            onClick={this.handleSubmitBtn}>Submit Rating</Button>
                        <Button id="Next-btn" color="primary" variant="contained"
                            onClick={this.handleNextBtn}>Next</Button>
                    </Card>
                </div>
                <div className="Feedback-review">
                    {/* This card displays the ratings that have been submitted up to that point */}
                    <Card className="Card">
                        <h2>Review Your Feedback</h2>
                        <h3>Feelings: {this.props.reduxStore.feeling}</h3>
                        <h3>Understanding: {this.props.reduxStore.understanding}</h3>
                        <h3>Support: {this.props.reduxStore.support}</h3>
                        <h3>Comments: {this.props.reduxStore.comments}</h3>
                        {/* conditionally-rendered button */}
                        <Button id="Final-submit-btn" color="primary" variant="contained"
                            disabled={status} onClick={this.handleSubmitFinalFeedback}>{text}</Button>
                    </Card>
                </div>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Support);