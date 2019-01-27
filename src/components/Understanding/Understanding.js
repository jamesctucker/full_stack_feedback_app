import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';




class Understanding extends Component {
    handleNextBtn = (event) => {
        this.props.history.push('/3');
    }

    handleSubmitBtn = (event) => {
        const action = { type: 'UPDATE_UNDERSTANDING', payload: this.state.rating };
        this.props.dispatch(action);
        this.setState({
            rating: '',
        })
    }

    updateUnderstandingRating = (event) => {
        this.setState({
            rating: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Project Feedback Form</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <div className="Feedback-body">
                    <Card className="Card">
                        <h2>How well are you understanding the content?</h2>
                        <p><i>On a scale of 1 - 5, with 5 being the best</i></p>
                        <Input id="Rating-input" onChange={this.updateUnderstandingRating}
                            className="Feedback-input" type="number">
                        </Input>
                        <br />
                        <br />
                        <Button id="Submit-btn" variant="contained"
                            onClick={this.handleSubmitBtn}>Submit</Button>
                        <Button id="Next-btn" color="primary" variant="contained"
                            onClick={this.handleNextBtn}>Next</Button>
                    </Card>
                </div>
                <div className="Feedback-review">
                    <Card className="Card">
                        <h2>Review Your Feedback</h2>
                        <h3>Feelings: {this.props.reduxStore.feeling}</h3>
                        <h3>Understanding: {this.props.reduxStore.understanding}</h3>
                        <h3>Support: {this.props.reduxStore.support}</h3>
                        <h3>Comments: {this.props.reduxStore.comments}</h3>
                    </Card>
                </div>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Understanding);