import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Comments extends Component {
    handleNextBtn = (event) => {
        let feedbackRating = {
            feeling: this.props.reduxStore.feeling,
            understanding: this.props.reduxStore.understanding,
            support: this.props.reduxStore.support,
            comments: this.props.reduxStore.comments
        }
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackRating
        }).then((response) => {
            console.log(response);
            this.props.history.push('/5');
        }).catch((error) => {
            alert('Error with the server');
        })
    }

    handleComments = (event) => {
        const action = { type: 'UPDATE_COMMENTS', payload: this.state.rating };
        this.props.dispatch(action);
        this.setState({
            rating: '',
        })
    }

    updateComments = (event) => {
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
                <div className="Feedback-body">
                    <h1>Any comments you want to leave?</h1>
                    <br />
                    <br />
                    <input onChange={this.updateComments} className="Feedback-input" type="text"></input>
                    <button onClick={this.handleComments}>Submit</button>
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
export default connect(mapReduxStoreToProps)(Comments);