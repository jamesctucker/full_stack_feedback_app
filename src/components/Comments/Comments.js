import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import '../App/App.css';



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

    handleSubmitBtn = (event) => {
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
                    <h1 className="App-title">Project Feedback Form</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <div className="Feedback-body">
                    <Card className="Card">
                        <h2>Any comments you want to leave?</h2>
                        <p><i>On a scale of 1 - 5, with 5 being the best</i></p>
                        <Input id="Rating-input" onChange={this.updateComments}
                            className="Feedback-input" type="string">
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
export default connect(mapReduxStoreToProps)(Comments);