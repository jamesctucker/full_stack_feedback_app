import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    handleNextBtn = (event) => {
        this.setState({
            rating: '',
        })
        this.props.history.push('/5');
    }

    handleComments = (event) => {
        const action = { type: 'UPDATE_COMMENTS', payload: this.state.rating };
        this.props.dispatch(action);
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