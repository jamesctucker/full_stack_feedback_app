import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            rating: '',
        }
    }

    // this function enables the user to click to navigate to the next part of the feedback
    handleNextBtn = (event) => {
        this.props.history.push('/2');
    }

    handleSubmitBtn = (event) => {
        const action = { type: 'UPDATE_FEELING', payload: this.state.rating };
        this.props.dispatch(action);
        this.setState({
            rating: '',
        })
    }

    updateFeelingRating = (event) => {
        this.setState({
            rating: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <div className="feedback-body">
                    <h1>How are you feeling today?</h1>
                    <p><i>On a scale of 1 - 5, with 5 being the best</i></p>
                    <br />
                    <br />
                    <input onChange={this.updateFeelingRating} className="Feedback-input" type="number"></input>
                    <button onClick={this.handleSubmitBtn}>Submit</button>
                    <br />
                    <br />
                    <button onClick={this.handleNextBtn}>Next</button>
                </div>
                <div className="Feedback-review">
                    <h1>Review Your Feedback</h1>
                    <br />
                    <br />
                    <h3>Feelings: {this.props.reduxStore.feeling}</h3>
                    <h3>Understanding: {this.props.reduxStore.understanding}</h3>
                    <h3>Support: {this.props.reduxStore.support}</h3>
                    <h3>Comments: {this.props.reduxStore.comments}</h3>
                </div>
            </div>
        )
    }

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Home);